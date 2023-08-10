import { Menu } from "contentlayer/generated";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ menu }: { menu: Menu }) {
  const [show, setShow] = useState(false);

  const menuButton = (
    <button
      className="mx-2 w-8 h-8 relative z-50"
      onClick={() => setShow(!show)}
      aria-label="Toggle Menu"
    >
      <span
        className={`${
          show ? "opacity-0" : ""
        } transition absolute inset-0 flex justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </span>
      <span
        className={`${
          show ? "" : "opacity-0"
        } transition absolute inset-0 flex justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </span>
    </button>
  );

  const menuItems = menu.entries.map((item) => {
    return (
      <span
        key={item.label}
        className="text-isabelline text-center font-light uppercase mx-4 my-2 px-4"
      >
        <Link href={item.link} onClick={() => setShow(false)}>
          {item.label}
        </Link>
      </span>
    );
  });

  const mobileContainer = (
    <div
      className={`${
        show ? "h-screen" : "h-0"
      } w-screen overflow-hidden bg-isabelline transition-all duration-500 ease-in-out absolute inset-0 flex flex-col justify-center -mt-4`}
    >
      {menuItems}
    </div>
  );

  const mobileMenu = (
    <div className="md:hidden text-right w-100">
      {menuButton}
      {mobileContainer}
    </div>
  );

  const desktopMenu = (
    <div className="hidden md:flex md:flex-row align-center justify-center w-100">
      {menuItems}
    </div>
  );

  return (
    <header className="flex flex-col justify-center backdrop-blur bg-black/50 sticky -top-8 inset-x-0 h-24 z-10">
      <nav className="flex flex-col justify-center sticky top-0 h-16">
        {mobileMenu}
        {desktopMenu}
      </nav>
    </header>
  );
}
