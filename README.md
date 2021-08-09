# @dn24/eslint-config

This is my personal configuration for [eslint].

## Install

Install ESLint and this configuration as development dependencies:

```bash
npm install --save-dev eslint @dn24/eslint-config
```

## Usage

Create an eslint config file in your project and extend from `@dn24/eslint-config`. Override any of the default configuration settings as you please. Here's an example:

```js
module.exports = {
  extends: '@dn24',
  rules: {
    ...
  }
}
```

## Lint

Make sure the `eslint` executable is in your `PATH` and run it against your javascript files to check for compliance.

```bash
eslint src/**/*.js
```

[eslint]: https://eslint.org
