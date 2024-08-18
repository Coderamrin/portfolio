"use client";
import React, { useEffect } from "react";
import data from "./menuData";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const path = usePathname();
  return (
    <header className={``}>
      {/* Desktop Nav */}
      <nav className="max-w-[815px] mx-auto text-gray-800 pt-10 px-5 md:px-0">
        <ul className="flex flex-wrap">
          {data.map((item) => (
            <li key={item.name}>
              <Link
                className={`mr-3 p-1 font-medium text-base hover:underline hover:text-purple-600 capitalize ${
                  path.includes(item.link!) && item.link != "/" ? "text-purple-600 underline" : ""
                } ${path === "/" && item.link == "/" ? "text-purple-600 underline" : ""}`}
                href={item.link || "/"}
                target={item.external ? "_blank" : "_self"}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
