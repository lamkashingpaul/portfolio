# base
FROM node:24.6.0-slim AS base
ENV CI=1
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV NODE_ENV=production
RUN corepack enable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install turbo@latest --global
USER node
WORKDIR /home/node/app

FROM base AS source
COPY --chown=node:node . .

# web
FROM source AS pruned-web
RUN turbo prune --scope=web --docker

FROM base AS web-base-with-dev-dependencies
COPY --from=pruned-web --chown=node:node /home/node/app/.husky/install.mjs /home/node/app/.husky/install.mjs
COPY --from=pruned-web --chown=node:node /home/node/app/out/pnpm-lock.yaml /home/node/app/out/pnpm-workspace.yaml /home/node/app/out/json/ ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod=false --frozen-lockfile
COPY --from=pruned-web --chown=node:node /home/node/app/out/full/ ./

FROM web-base-with-dev-dependencies AS web-dev
RUN pnpm dev
CMD [ "pnpm", "dev" ]

FROM web-base-with-dev-dependencies AS web-lint
RUN pnpm lint
CMD [ "pnpm", "lint" ]

FROM web-base-with-dev-dependencies AS web-test
RUN pnpm test
CMD [ "pnpm", "test" ]

FROM web-base-with-dev-dependencies AS web-build
RUN pnpm build
CMD [ "pnpm", "build" ]

FROM base AS web-prod
EXPOSE 3000
COPY --from=web-build --chown=node:node /home/node/app/apps/web/.next/standalone ./
COPY --from=web-build --chown=node:node /home/node/app/apps/web/.next/static ./apps/web/.next/static
COPY --from=web-build --chown=node:node /home/node/app/apps/web/public ./apps/web/public
WORKDIR /home/node/app/apps/web
CMD [ "node", "server.js" ]
