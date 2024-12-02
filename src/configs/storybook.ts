import { Linter } from "eslint";
import storybookConfig from "eslint-plugin-storybook";

const config: Linter.Config[] = [
  ...storybookConfig.configs["flat/recommended"],
  {
    ignores: ["!.storybook"],
  },
];

export default config;
