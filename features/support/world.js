const path = require("path");
const { World, setWorldConstructor } = require("@cucumber/cucumber");
const { ESLint } = require("eslint");

class CustomWorld extends World {
  linterConfigFromTag(tag) {
    return path.resolve(__dirname, "../../rules", `${tag}.js`);
  }

  createLinter(tag) {
    const configFile = this.linterConfigFromTag(tag);
    this.linter = new ESLint({ overrideConfigFile: configFile });
  }
}

setWorldConstructor(CustomWorld);
