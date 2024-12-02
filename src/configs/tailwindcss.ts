import { Linter } from "eslint";
import tailwindCssConfig from "eslint-plugin-tailwindcss";

const config: Linter.Config[] = tailwindCssConfig.configs["flat/recommended"];

export default config;
