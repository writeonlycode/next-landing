import { Services } from "contentlayer/generated";
import Image from "next/image";

export default function ServicesSeciton({ data }: { data: Services }) {
  return (
    <section className="py-40" id="services">
      <div className="lg:max-w-screen-lg container mx-auto px-8 h-full">
        <div className="flex flex-col items-center">
          <div className="text-center w-full h-64 relative mb-16">
            <Image
              src={data.image}
              alt="Featured Image"
              className="object-cover object-center rounded-xl"
              sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
              fill
            />
          </div>
          <div className="text-center lg:text-left lg:w-7/12 lg:pl-32">
            <span className="uppercase text-lg font-bold mb-4">
              {data.pretitle}
            </span>
            <h1 className="font-heading text-5xl font-black mb-8">
              {data.title}
            </h1>
            <p className="text-2xl font-light">{data.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
