import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

// Type Site contains information about the website, such as: the title of the
// website, a description, an associated image, among others.
export const Site = defineDocumentType(() => ({
  name: "Site",
  description:
    "Type Site contains information about the website, such as the title and a description of the website.",
  contentType: "data",
  filePathPattern: "/config/site.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    baseUrl: { type: "string", required: true },
    languageCode: { type: "string", required: true },
  },
}));

// Type Menu contains information about the website menu and its entries,
// including their label and link.
export const Menu = defineDocumentType(() => ({
  name: "Menu",
  description:
    "Type Menu contains information about the website menu and its entries, including their label and link.",
  contentType: "data",
  filePathPattern: "/config/menu.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: false },
    entries: { type: "list", of: Link, required: true },
  },
}));

const Link = defineNestedType(() => ({
  name: "Link",
  fields: {
    label: { type: "string", required: true },
    link: { type: "string", required: false },
    blank: { type: "boolean", required: false },
  },
}));

// Type Hero contains information about the website Hero section.
export const Hero = defineDocumentType(() => ({
  name: "Hero",
  description: "Type Hero contains information about the website Hero section.",
  contentType: "data",
  filePathPattern: "/data/hero.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    lead: { type: "string", required: true },
    backgroundImage: { type: "string", required: true },
  },
}));

// Type History contains information about the website History section.
export const History = defineDocumentType(() => ({
  name: "History",
  description:
    "Type History contains information about the website History section.",
  contentType: "data",
  filePathPattern: "/data/history.yaml",
  isSingleton: true,
  fields: {
    pretitle: { type: "string", required: true },
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

// Type About contains information about the website About section.
export const About = defineDocumentType(() => ({
  name: "About",
  description:
    "Type About contains information about the website About section.",
  contentType: "data",
  filePathPattern: "/data/about.yaml",
  isSingleton: true,
  fields: {
    pretitle: { type: "string", required: true },
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    image: { type: "string", required: true },
    brands: { type: "nested", of: Brands, required: true },
  },
}));

const Brands = defineNestedType(() => ({
  name: "Brands",
  fields: {
    title: { type: "string", required: true },
    items: { type: "list", of: Brand, required: true },
  },
}));

const Brand = defineNestedType(() => ({
  name: "Brand",
  fields: {
    label: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

// Type Services contains information about the website Services section.
export const Services = defineDocumentType(() => ({
  name: "Services",
  description:
    "Type Services contains information about the website Services section.",
  contentType: "data",
  filePathPattern: "/data/services.yaml",
  isSingleton: true,
  fields: {
    pretitle: { type: "string", required: true },
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

// Type Footer contains information about the website Footer section.
export const Footer = defineDocumentType(() => ({
  name: "Footer",
  description:
    "Type Footer contains information about the website Footer section.",
  contentType: "data",
  filePathPattern: "/data/footer.yaml",
  isSingleton: true,
  fields: {
    menu: { type: "nested", of: Menu, required: true },
    hours: { type: "nested", of: Menu, required: true },
    location: { type: "nested", of: Menu, required: true },
    copyright: { type: "nested", of: Menu, required: true },
  },
}));

// Type Contact contains information about the website Contact page.
export const Contact = defineDocumentType(() => ({
  name: "Contact",
  description:
    "Type Contact contains information about the website Contact section.",
  contentType: "data",
  filePathPattern: "/data/contact.yaml",
  isSingleton: true,
  fields: {
    pretitle: { type: "string", required: true },
    title: { type: "string", required: true },
    text: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Site, Menu, Hero, History, About, Services, Footer, Contact],
});
