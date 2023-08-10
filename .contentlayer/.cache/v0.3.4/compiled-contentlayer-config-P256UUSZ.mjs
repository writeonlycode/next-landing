// contentlayer.config.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var Site = defineDocumentType(() => ({
  name: "Site",
  description: "Type Site contains information about the website, such as the title and a description of the website.",
  contentType: "data",
  filePathPattern: "/config/site.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    baseUrl: { type: "string", required: true },
    languageCode: { type: "string", required: true }
  }
}));
var Menu = defineDocumentType(() => ({
  name: "Menu",
  description: "Type Menu contains information about the website menu and its entries, including their label and link.",
  contentType: "data",
  filePathPattern: "/config/menu.yaml",
  isSingleton: true,
  fields: {
    entries: { type: "list", of: Link, required: true }
  }
}));
var Link = defineNestedType(() => ({
  name: "Link",
  fields: {
    label: { type: "string", required: true },
    link: { type: "string", required: true }
  }
}));
var Hero = defineDocumentType(() => ({
  name: "Hero",
  description: "Type Hero contains information about the website Hero section.",
  contentType: "data",
  filePathPattern: "/data/hero.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    lead: { type: "string", required: true },
    backgroundImage: { type: "string", required: true }
  }
}));
var History = defineDocumentType(() => ({
  name: "History",
  description: "Type History contains information about the website History section.",
  contentType: "data",
  filePathPattern: "/data/history.yaml",
  isSingleton: true,
  fields: {
    pretitle: { type: "string", required: true },
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    image: { type: "string", required: true }
  }
}));
var About = defineDocumentType(() => ({
  name: "About",
  description: "Type About contains information about the website About section.",
  contentType: "data",
  filePathPattern: "/data/about.yaml",
  isSingleton: true,
  fields: {
    pretitle: { type: "string", required: true },
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    image: { type: "string", required: true },
    brands: { type: "nested", of: Brands, required: true }
  }
}));
var Brands = defineNestedType(() => ({
  name: "Brand",
  fields: {
    title: { type: "string", required: true },
    items: { type: "list", of: { type: Brand }, required: true }
  }
}));
var Brand = defineNestedType(() => ({
  name: "Brand",
  fields: {
    label: { type: "string", required: true },
    image: { type: "string", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Site, Menu, Hero, History, About]
});
export {
  About,
  Hero,
  History,
  Menu,
  Site,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-P256UUSZ.mjs.map
