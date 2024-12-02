import path from "node:path";
import { fileURLToPath } from "node:url";

const thisFilename = fileURLToPath(import.meta.url);
const thisDirname = path.dirname(thisFilename);

export function getCurrentFileInfo() {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  return {
    filename,
    dirname,
  };
}

export function getRootDirectory() {
  return path.resolve(thisDirname, "../..");
}
