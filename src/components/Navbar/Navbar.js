"use client";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className={`${
        navbar ? "animate-trans-navbarbg" : "animate-none"
      } bg-navbg w-full h-auto md:flex justify-between items-center fixed top-0 text-white backdrop-blur-sm py-1 z-[200]`}
    >
      <div className="flex justify-between items-center">
        <Link href="/#home">
          <Image
            src={"/Images/HO3.svg"}
            alt="logo"
            width="150"
            height="150"
            className="flex justify-center items-center p-3 md:pl-16 pl-8 w-[120px] h-[65px] md:w-40"
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
        className={`md:flex h-auto  md:space-x-3 items-center justify-center md:pr-4  ${
          navbar ? "block" : "hidden"
        }`}
      >
        <Link href="/#home">
          <li className="animate-trans-navbar-component-1 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-[23px] hover:text-[#06EBE5] hover:underline">
            Home
          </li>
        </Link>
        <Link href="/#about-us">
          <li className="animate-trans-navbar-component-2 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-[23px] hover:text-[#06EBE5] hover:underline">
            About Us
          </li>
        </Link>
        <a href="mailto:mail@hackodisha.tech" rel="noreferrer" target="_blank">
          <li className="animate-trans-navbar-component-3 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-[23px] hover:text-[#06EBE5] hover:underline">
            Contact Us
          </li>
        </a>
        <a href="/#timeline">
          <li className="animate-trans-navbar-component-4 md:animate-none p-3 md:pl-3 pl-8 font-navtxt text-[23px] hover:text-[#06EBE5] hover:underline">
            Events
          </li>
        </a>
        <a
          href="https://discord.gg/ewun7cxkJh"
          rel="noreferrer"
          target="_blank"
          className="w-screen inline-flex md:w-fit justify-center"
        >
          <button className=" self-start hover:bg-[#096D6A] p-3 md:pl-3 pl-8 transition-colors ease-in rounded-2xl text-sm sm:text-lg px-4 py-2 border-white text-white border-2">
            Join Discord
          </button>
        </a>
        <div className="empty h-6 w-fit"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
