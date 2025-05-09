# base
FROM node:22.14.0-slim AS base
ENV TINI_VERSION=0.19.0
ENV TURBO_VERSION=2.5.3
ENV COREPACK_VERSION=0.31.0
ENV PNPM_VERSION=10.10.0
ENV CI=1
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV NODE_ENV=production
RUN corepack enable
RUN npm install -g corepack@${COREPACK_VERSION}
RUN corepack use pnpm@${PNPM_VERSION}
ADD --chmod=755 https://github.com/krallin/tini/releases/download/v${TINI_VERSION}/tini /usr/local/bin/tini
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install turbo@${TURBO_VERSION} --global
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
COPY --from=pruned-web --chown=node:node /home/node/app/out/full/apps/web/next.config-standalone.mjs ./apps/web/next.config.mjs

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
ENTRYPOINT [ "/usr/local/bin/tini", "--" ]
CMD [ "node", "server.js" ]
