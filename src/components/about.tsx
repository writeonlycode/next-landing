import Image from "next/image";
import {aboutData} from "@/lib/data";

export default function About({ data }: { data: aboutData }) {
  const brands = data.brands.items.map((item) => {
    return (
      <span key={item.name} className="m-4 relative h-16 grow">
        <Image
          src={item.image}
          alt={item.name}
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
          fill
        />
      </span>
    );
  });

  return (
    <section className="bg-feldgrau text-isabelline py-40" id="about">
      <div className="lg:max-w-screen-lg container mx-auto px-8 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-stretch justify-end mb-28">
          <div className="text-center lg:text-left lg:w-6/12 lg:pr-32">
            <span className="uppercase text-lg font-bold mb-4">
              {data.pretitle}
            </span>
            <h1 className="font-heading text-5xl font-black mb-8">
              {data.title}
            </h1>
            <p className="text-2xl font-light">{data.text}</p>
          </div>
          <div className="flex flex-col items-stretch justify-center lg:w-6/12 h-64 lg:h-auto mb-4 lg:mb-0">
            <div className="aspect-square relative">
              <Image
                src={data.image}
                alt="Featured Image"
                className="object-cover object-center rounded-xl"
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                fill
              />
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="font-heading text-3xl font-black text-center mb-10">
            {data.brands.title}
          </h2>
          <div className="flex flex-col lg:flex-row justify-center">
            {brands}
          </div>
        </div>
      </div>
    </section>
  );
}
