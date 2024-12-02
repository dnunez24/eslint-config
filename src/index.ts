import ESLint from "eslint";
import prettierConfig from "eslint-config-prettier";
import baseConfig from "./configs/base.js";
import jestConfig from "./configs/jest.js";
import nextConfig from "./configs/next.js";
import reactConfig from "./configs/react.js";
import storybookConfig from "./configs/storybook.js";
import tailwindCssConfig from "./configs/tailwindcss.js";
import typescriptConfig from "./configs/typescript.js";

interface ESLintConfigMap {
  [key: string]: ESLint.Linter.Config[];
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
