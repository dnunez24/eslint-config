import { Linter } from "eslint";
import { makeFlatConfigExtends } from "../helpers/compat";

const nextCoreWebVitalsConfig = makeFlatConfigExtends(
  "plugin:@next/next/core-web-vitals",
);

const config: Linter.Config[] = [...nextCoreWebVitalsConfig];

export default config;
