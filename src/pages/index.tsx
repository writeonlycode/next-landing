import Head from "next/head";

import getConfig, { siteConfig } from "../lib/config";
import getMenu, { siteMenu } from "../lib/menu";
import getData, { siteData } from "../lib/data";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import History from "@/components/history";
import About from "@/components/about";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function Home({
  config,
  menu,
  data,
}: {
  config: siteConfig;
  menu: siteMenu;
  data: siteData;
}) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar menu={menu} />
      <Hero data={data.hero} />
      <History data={data.history} />
      <About data={data.about} />
      <Services data={data.services} />
      <Footer data={data.footer} />
    </>
  );
}

export const getStaticProps = async () => {
  const config = getConfig();
  const menu = getMenu();
  const data = getData();

  return { props: { config, menu, data } };
};
