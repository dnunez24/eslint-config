import type { Linter } from "eslint";
import {
  makeFileSpecificConfig,
  makeFlatConfigExtends,
} from "../helpers/compat.js";

const ReactRecommendedConfig = makeFlatConfigExtends(
  "plugin:react/recommended",
);
const ReactHooksRecommendedConfig = makeFlatConfigExtends(
  "plugin:react-hooks/recommended",
);

const config: Linter.Config[] = makeFileSpecificConfig(
  [...ReactRecommendedConfig, ...ReactHooksRecommendedConfig],
  ["**/*.[jt]sx"],
);

export default config;
