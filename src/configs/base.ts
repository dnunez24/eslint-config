import eslint from "@eslint/js";
import { type Linter } from "eslint";
import globals from "globals";
import { makeFlatConfigExtends, makeFlatConfigPlugin } from "../helpers/compat";

const eslintCommentsPlugin = makeFlatConfigPlugin("eslint-comments");
const eslintCommentsConfig = makeFlatConfigExtends(
  "plugin:eslint-comments/recommended",
);

const config: Linter.Config[] = [
  eslint.configs.recommended,
  ...eslintCommentsPlugin,
  ...eslintCommentsConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "eslint-comments/no-unused-disable": "error",
      complexity: ["warn", 11],
    },
  },
  {
    ignores: [".yarn", "node_modules", ".pnp.*"],
  },
];

export default config;
