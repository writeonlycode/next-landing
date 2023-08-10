import Head from "next/head";

import { site, menu, footer, contact } from "contentlayer/generated";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | {site.title}</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar menu={menu} />
      <Contact data={contact} />
      <Footer data={footer} />
    </>
  );
}
