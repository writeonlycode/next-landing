// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
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
  },
  computedFields: {}
}));
var contentlayer_config_default = makeSource({ contentDirPath: "content", documentTypes: [Site] });
export {
  Site,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4MFTSRUU.mjs.map
