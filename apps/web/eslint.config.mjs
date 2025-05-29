import { nextJsConfig as baseNextJsConfig } from "@workspace/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
const nextJsConfig = [
  ...baseNextJsConfig,
  {
    ignores: ["*.mjs"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        React: true,
        NodeJS: true,
      },
    },
  },
];

export default nextJsConfig;
