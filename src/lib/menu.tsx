import fs from "fs";
import { join } from "path";
const yaml = require("js-yaml");

export type siteMenu = { name: string; link: string }[];

export default function getConfig() {
  const configDirectory = join(process.cwd(), "config");
  const fullPath = join(configDirectory, `menu.yaml`);
  const doc = yaml.load(fs.readFileSync(fullPath, "utf8")) as siteMenu;
  return doc;
}
