import eslint from "@eslint/js";

import { type Linter } from "eslint";
import {
  makeFlatConfigExtends,
  makeFlatConfigPlugin,
} from "../helpers/compat.js";

const eslintCommentsPlugin = makeFlatConfigPlugin("eslint-comments");
const eslintCommentsConfig = makeFlatConfigExtends(
  "plugin:eslint-comments/recommended",
);

const config: Linter.Config[] = [
  eslint.configs.recommended,
  ...eslintCommentsPlugin,
  ...eslintCommentsConfig,
  {
    rules: {
      "eslint-comments/no-unused-disable": "error",
      complexity: ["warn", 11],
    },
  },
];

export default config;
