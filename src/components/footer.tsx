import { Footer, Link as MenuLink } from "contentlayer/generated";
import Link from "next/link";

export default function FooterSection({ data }: { data: Footer }) {

  const generateMenu = (entries: MenuLink[]) => {
    return entries.map((entry: MenuLink) => {
      if (entry.link) {
        return (
          <li key={entry.label}>
            <Link
              target={entry.blank ? "_blank" : ""}
              href={entry.link}
              className="underline"
            >
              {entry.label}
            </Link>
          </li>
        );
      } else {
        return (
          <li key={entry.label}>
            <span dangerouslySetInnerHTML={{ __html: entry.label }} />
          </li>
        );
      }
    });
  };

  return (
    <section className="bg-feldgrau text-saltpan pt-20 pb-10">
      {/* Container */}
      <div className="lg:max-w-screen-lg container mx-auto px-8">
        {/* Row */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center mb-16">
          {/* Column */}
          <div className="flex justify-center lg:w-4/12">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="font-bold text-2xl mb-4">{data.menu.title}</h2>
              <ul className="flex flex-col gap-3">{generateMenu(data.menu.entries)}</ul>
            </div>
          </div>
          {/* Column */}
          <div className="flex justify-center lg:w-4/12">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="font-bold text-2xl mb-4">{data.hours.title}</h2>
              <ul className="flex flex-col gap-3">{generateMenu(data.hours.entries)}</ul>
            </div>
          </div>
          {/* Column */}
          <div className="flex justify-center lg:w-4/12">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="font-bold text-2xl mb-4">{data.location.title}</h2>
              <ul className="flex flex-col gap-3">{generateMenu(data.location.entries)}</ul>
            </div>
          </div>
        </div>
        {/* Row */}
        <div className="text-center text-sm">
        <ul className="flex flex-col gap-0">
          {generateMenu(data.copyright.entries)}
        </ul>
        </div>
      </div>
    </section>
  );
}
