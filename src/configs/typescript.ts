import { Linter } from "eslint";
import TypescriptESLint from "typescript-eslint";

const customRules = {
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "variable",
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "variable",
        modifiers: ["global"],
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["variableLike", "memberLike", "method"],
        types: ["boolean"],
        format: ["camelCase"],
        prefix: [
          "can",
          "did",
          "do",
          "does",
          "has",
          "is",
          "must",
          "should",
          "was",
          "will",
        ],
      },
      {
        selector: "parameter",
        modifiers: ["unused"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "objectLiteralProperty",
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "classProperty",
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
    ],
  },
};

const config = TypescriptESLint.config(
  TypescriptESLint.configs.strictTypeChecked,
  TypescriptESLint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ["**/*.js?(x)"],
    extends: [TypescriptESLint.configs.disableTypeChecked],
  },
) as Linter.Config[];

export default config;
