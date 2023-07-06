"use client";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className={`${
        navbar ? "animate-trans-navbarbg" : "animate-none"
      } bg-navbg w-full h-full md:flex justify-between items-center sticky top-0 text-white backdrop-blur-sm`}
    >
      <div className="flex justify-between items-center">
        <Link href="/swadhin/#home">
          <Image
            src={"/Images/HO3.svg"}
            alt="logo"
            width="100"
            height="100"
            className="flex justify-center items-center p-3 md:pl-16 pl-8 w-28 h-14 md:w-40"
          />
        </Link>
        <span className="pr-8 md:hidden flex items-center justify-center">
          <Hamburger
            toggled={navbar}
            toggle={() => setNavbar(!navbar)}
            duration={0.5}
          />
        </span>
      </div>
      <ul
        className={`md:flex  md:space-x-3 items-center justify-center md:pr-4 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <Link href="/swadhin/#home">
          <li className="animate-trans-navbar-component-1 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-xl hover:bg-slate-400 hover:bg-opacity-10">
            Home
          </li>
        </Link>
        <Link href="/swadhin/#about">
          <li className="animate-trans-navbar-component-2 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-xl hover:bg-slate-400 hover:bg-opacity-10">
            About Us
          </li>
        </Link>
        <Link href="/swadhin/#contact">
          <li className="animate-trans-navbar-component-3 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-xl hover:bg-slate-400 hover:bg-opacity-10">
            Contact Us
          </li>
        </Link>
        <Link href="/swadhin/#event">
          <li className="animate-trans-navbar-component-4 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-xl hover:bg-slate-400 hover:bg-opacity-10">
            Events
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
