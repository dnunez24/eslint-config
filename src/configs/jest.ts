import {
  makeFileSpecificConfig,
  makeFlatConfigExtends,
} from "../helpers/compat";

const jestConfig = makeFlatConfigExtends("plugin:jest/recommended");
const config = makeFileSpecificConfig(jestConfig, [
  "**/__tests__/**",
  "**/*.test.*",
]);

export default config;
