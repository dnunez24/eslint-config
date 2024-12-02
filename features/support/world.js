import { World, setWorldConstructor } from "@cucumber/cucumber";
import { ESLint } from "eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";

class CustomWorld extends World {
  linterConfigFromTag(tag) {
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
    return path.resolve(dirname, "../../rules", `${tag}.js`);
  }

  createLinter(tag) {
    const configFile = this.linterConfigFromTag(tag);
    this.linter = new ESLint({ overrideConfigFile: configFile });
  }
}

setWorldConstructor(CustomWorld);
