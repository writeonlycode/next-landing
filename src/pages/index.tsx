import Head from "next/head";

import {
  site,
  menu,
  hero,
  history,
  about,
  service as services,
  footer,
} from "contentlayer/generated";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import History from "@/components/history";
import About from "@/components/about";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar menu={menu} />
      <Hero data={hero} />
      <History data={history} />
      <About data={about} />
      <Services data={services} />
      <Footer data={footer} />
    </>
  );
}
