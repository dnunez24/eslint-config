import { type Linter } from "eslint";
import prettierConfig from "eslint-config-prettier";
import baseConfig from "./configs/base";
import jestConfig from "./configs/jest";
import nextConfig from "./configs/next";
import reactConfig from "./configs/react";
import storybookConfig from "./configs/storybook";
import tailwindCssConfig from "./configs/tailwindcss";
import typescriptConfig from "./configs/typescript";

interface ESLintConfigMap {
  [key: string]: Linter.Config[];
}

export const configs: ESLintConfigMap = {
  basic: [...baseConfig, ...jestConfig, prettierConfig],
  all: [
    ...baseConfig,
    ...jestConfig,
    ...reactConfig,
    ...storybookConfig,
    ...tailwindCssConfig,
    ...typescriptConfig,
    prettierConfig,
  ],
  react: [
    ...baseConfig,
    ...jestConfig,
    ...reactConfig,
    ...storybookConfig,
    ...typescriptConfig,
    prettierConfig,
  ],
  next: [
    ...baseConfig,
    ...jestConfig,
    ...nextConfig,
    ...storybookConfig,
    ...typescriptConfig,
    prettierConfig,
  ],
  typescript: [
    ...baseConfig,
    ...jestConfig,
    ...typescriptConfig,
    prettierConfig,
  ],
};

export default configs.all;
