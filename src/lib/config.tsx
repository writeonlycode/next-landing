import fs from "fs";
import { join } from "path";
const yaml = require("js-yaml");

export interface siteConfig {
  title: string;
  description: string;
}

export default function getConfig() {
  const configDirectory = join(process.cwd(), "config");
  const fullPath = join(configDirectory, `config.yaml`);
  const doc = yaml.load(fs.readFileSync(fullPath, "utf8"));
  return doc;
}
