import { Linter } from "eslint";
import { makeFlatConfigExtends } from "../helpers/compat.js";

// Includes react, import and jsx-a11y rules
const nextCoreWebVitalsConfig = makeFlatConfigExtends("next/core-web-vitals");
const config: Linter.Config[] = [...nextCoreWebVitalsConfig];

export default config;
