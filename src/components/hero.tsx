import { Hero } from "contentlayer/generated";
import Image from "next/image";

export default function HeroSection({ data }: { data: Hero }) {
  return (
    <section className="h-screen -mt-24 pt-36 pb-12 relative">
      <Image
        src={data.backgroundImage}
        alt="Background Image"
        className="object-cover object-center -z-10"
        sizes="100vw"
        fill
        priority
      />
      <div className="lg:max-w-screen-lg container mx-auto px-8 h-full">
        <div className="flex items-center justify-end h-full">
          <div className="text-center lg:text-left lg:w-5/12">
            <h1 className="font-heading text-8xl lg:text-9xl font-black text-isabelline mb-8">
              {data.title}
            </h1>
            <p className="text-3xl lg:text-4xl font-extralight text-isabelline">
              {data.lead}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
