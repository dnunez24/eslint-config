const { defineParameterType } = require("@cucumber/cucumber");

defineParameterType({
  name: "severity",
  regexp: /pass|warn|error/,
  transformer: (original) => ["pass", "warn", "error"].indexOf(original),
});
