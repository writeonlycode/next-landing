import fs from "fs";
import { join, parse } from "path";
const yaml = require("js-yaml");

export interface siteData {
  hero: heroData;
  history: historyData;
  about: aboutData;
  services: servicesData;
  footer: footerData;
}

export interface heroData {
  title: string;
  lead: string;
  backgroundImage: string;
}

export interface historyData {
  pretitle: string;
  title: string;
  text: string;
  image: string;
}

export interface aboutData {
  pretitle: string;
  title: string;
  text: string;
  image: string;
  brands: { title: string; items: { name: string; image: string }[] };
}

export interface servicesData {
  pretitle: string;
  title: string;
  text: string;
  image: string;
}

export interface footerData {
  menu: {
    title: string;
    items: { name: string; link: string; newWindow: boolean }[];
  };
  hours: {
    title: string;
    items: { name: string; link: string; newWindow: boolean }[];
  };
  location: {
    title: string;
    items: { name: string; link: string; newWindow: boolean }[];
  };
  copyright: {
    title: string;
    items: { name: string; link: string; newWindow: boolean }[];
  };
}

export default function getData(): siteData {
  const directory = join(process.cwd(), "data");

  const heroFullPath = join(directory, "hero.yaml");
  const hero = yaml.load(fs.readFileSync(heroFullPath, "utf8")) as heroData;

  const historyFullPath = join(directory, "history.yaml");
  const history = yaml.load(
    fs.readFileSync(historyFullPath, "utf8")
  ) as historyData;

  const aboutFullPath = join(directory, "about.yaml");
  const about = yaml.load(fs.readFileSync(aboutFullPath, "utf8")) as aboutData;

  const servicesFullPath = join(directory, "services.yaml");
  const services = yaml.load(
    fs.readFileSync(servicesFullPath, "utf8")
  ) as servicesData;

  const footerFullPath = join(directory, "footer.yaml");
  const footer = yaml.load(
    fs.readFileSync(footerFullPath, "utf8")
  ) as footerData;

  return { hero, history, about, services, footer };
}
