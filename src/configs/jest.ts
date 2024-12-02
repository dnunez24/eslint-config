import {
  makeFileSpecificConfig,
  makeFlatConfigExtends,
} from "../helpers/compat.js";

const jestConfig = makeFlatConfigExtends("plugin:jest/recommended");
const config = makeFileSpecificConfig(jestConfig, [
  "**/__tests__/**",
  "**/*.test.*",
]);

export default config;
