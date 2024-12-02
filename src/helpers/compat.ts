import { FlatCompat } from "@eslint/eslintrc";
import type { Linter } from "eslint";
import { getCurrentFileInfo } from "./fs";

interface CompatOptions {
  baseDirectory?: string;
}

/**
 * Create a flat config compatible ESLint config for a given ESLint config.
 *
 * @param configName The name of the ESLint config to create a compatible config for.
 * @param options Options for creating the compatible config.
 * @returns The compatible ESLint config.
 *
 * @example
 * ```typescript
 * const compat = makeFlatConfigCompatible();
 *
 * export default [
 *   ...compat.plugins("some-incompatible-plugin"),
 *   ...compat.extends("some-incompatible-config"),
 * ];
 * ```
 */
export function makeFlatConfigCompatible({
  baseDirectory,
}: CompatOptions = {}): FlatCompat {
  const { dirname } = getCurrentFileInfo();
  const compat = new FlatCompat({
    baseDirectory: baseDirectory ?? dirname,
  });
  return compat;
}

/**
 * Make a flat config compatible ESLint extends directive.
 *
 * @param configName The name of the config to extend.
 * @param options Options for creating the compatible extends directive.
 * @returns A flat config compatible ESLint extends directive.
 *
 * @example
 * ```typescript
 * const config = makeFlatConfigExtends("plugin:jest/recommended");
 * export default [...config];
 * ```
 */
export function makeFlatConfigExtends(
  configName: string,
  { baseDirectory }: CompatOptions = {},
): Linter.Config[] {
  const { dirname } = getCurrentFileInfo();
  const compat = new FlatCompat({
    baseDirectory: baseDirectory ?? dirname,
  });
  return compat.extends(configName);
}

/**
 * Make a flat config compatible ESLint plugin directive.
 *
 * @param pluginName The name of the plugin to make compatible.
 * @param options Options for creating the compatible plugin.
 * @returns A flat config compatible ESLint plugin directive.
 *
 * @example
 * ```typescript
 * const plugins = makeFlatConfigPlugin("eslint-comments");
 * export default [...plugins];
 * ```
 */
export function makeFlatConfigPlugin(
  pluginName: string,
  { baseDirectory }: CompatOptions = {},
): Linter.Config[] {
  const compat = makeFlatConfigCompatible({ baseDirectory });
  return compat.plugins(pluginName);
}

/**
 * Make a file specific ESLint config from one or more existing configs.
 *
 * @param configs A list of ESLint configs to make file specific.
 * @param files A list of file patterns to make the configs specific to.
 * @returns A flat config compatible ESLint config that is specific to the given files.
 */
export function makeFileSpecificConfig(
  configs: Linter.Config[],
  files: string[],
): Linter.Config[] {
  return configs.map((config) => ({ ...config, ...{ files } }));
}
