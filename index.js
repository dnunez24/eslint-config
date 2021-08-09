module.exports = {
  extends: ["./rules/base", "prettier"],
  rules: {},
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["./rules/base", "./rules/typescript", "prettier"],
    },
    {
      files: ["**/*.[jt]sx"],
      extends: ["./rules/base", "./rules/react", "prettier"],
    },
    {
      files: ["**/tests?/**/*.test.[jt]s"],
      extends: ["./rules/base", "./rules/jest", "prettier"],
    },
  ],
};
