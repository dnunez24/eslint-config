# @upperhandmusic/eslint-config

This is the standard [eslint] configuration for Upperhand Music Javascript and Typescript projects.

## Install

Install this configuration as a development dependency:

```bash
yarn add -D @upperhandmusic/eslint-config
```

## Usage

Create an `eslint.config.mjs` file in your project and use the `@upperhandmusic/eslint-config`. Here's an example:

```js
import config from "@upperhandmusic/eslint-config";

export default config;
```

Make sure the `eslint` executable is in your `PATH` and run it against your javascript files to check for compliance.

```bash
yarn eslint .
```

## File Naming Conventions

- Files with `jsx` or `tsx` file extensions will enable React and React Hooks rules
- Files in `__test__` directories or files named like `*.test.*` will enable Jest rules
- Files named like `*.stories.*` or `*.story.*` will enable Storybook rules
- All other files will

[eslint]: https://eslint.org
