// contentlayer.config.js
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
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
    entries: { type: "list" },
    of: Link,
    required: true
  }
}));
var Link = defineNestedType(() => ({
  name: "Link",
  fields: {
    label: { type: "string", required: true },
    link: { type: "string", required: true }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "content", documentTypes: [Site, Menu] });
export {
  Menu,
  Site,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-35JYZC4A.mjs.map
