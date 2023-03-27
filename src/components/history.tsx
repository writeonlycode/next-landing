import Image from "next/image";
import {historyData} from "@/lib/data";

export default function History({ data }: { data: historyData }) {
  return (
    <section className="py-40" id="history">
      <div className="lg:max-w-screen-lg container mx-auto px-8 h-full">
        <div className="flex flex-col lg:flex-row items-stretch justify-end h-full">
          <div className="text-center lg:text-left lg:w-5/12 h-64 lg:h-auto relative mb-4 lg:mb-0">
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
