import Link from "next/link";
import { footerData } from "@/lib/data";

export default function Footer({ data }: { data: footerData }) {
  const menuItems = data.menu.items.map((item) => {
    if (item.link) {
      return (
        <li key={item.name} className="mb-4">
          <Link
            target={item.newWindow ? "_blank" : ""}
            href={item.link}
            className="underline"
          >
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={item.name} className="mb-4">
          <span dangerouslySetInnerHTML={{ __html: item.name }} />
        </li>
      );
    }
  });

  const hoursItems = data.hours.items.map((item) => {
    if (item.link) {
      return (
        <li key={item.name} className="mb-4">
          <Link
            target={item.newWindow ? "_blank" : ""}
            href={item.link}
            className="underline"
          >
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={item.name} className="mb-4">
          <span dangerouslySetInnerHTML={{ __html: item.name }} />
        </li>
      );
    }
  });

  const locationItems = data.location.items.map((item) => {
    if (item.link) {
      return (
        <li key={item.name} className="mb-4">
          <Link
            target={item.newWindow ? "_blank" : ""}
            href={item.link}
            className="underline"
          >
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={item.name} className="mb-4">
          <span dangerouslySetInnerHTML={{ __html: item.name }} />
        </li>
      );
    }
  });

  const copyrightItems = data.copyright.items.map((item) => {
    if (item.link) {
      return (
        <p key={item.name}>
          <Link
            target={item.newWindow ? "_blank" : ""}
            href={item.link}
            className="underline"
          >
            {item.name}
          </Link>
        </p>
      );
    } else {
      return (
        <p key={item.name}>
          <span dangerouslySetInnerHTML={{ __html: item.name }} />
        </p>
      );
    }
  });

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
              <ul className="">{menuItems}</ul>
            </div>
          </div>
          {/* Column */}
          <div className="flex justify-center lg:w-4/12">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="font-bold text-2xl mb-4">{data.hours.title}</h2>
              <ul className="">{hoursItems}</ul>
            </div>
          </div>
          {/* Column */}
          <div className="flex justify-center lg:w-4/12">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="font-bold text-2xl mb-4">{data.location.title}</h2>
              <ul className="">{locationItems}</ul>
            </div>
          </div>
        </div>
        {/* Row */}
        <div className="text-center text-sm">{copyrightItems}</div>
      </div>
    </section>
  );
}
