import { Before, Given, Then, When } from "@cucumber/cucumber";
import expect from "expect";

Before("@typescript", function () {
  this.createLinter("typescript");
});

Given("code that looks like", function (code) {
  this.code = code;
});

When("lint rule {string} is run", async function (ruleId) {
  const [result] = await this.linter.lintText(this.code);
  const [message] = result.messages.filter(
    (message) => message.ruleId === ruleId,
  );
  console.log(message);
  this.severity = message?.severity;
});

Then("the result is {severity}", function (expected) {
  expect(this.severity).toEqual(expected);
});
