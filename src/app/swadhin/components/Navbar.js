import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className=" bg-black bg-opacity-50 w-full h-full flex justify-between items-center sticky top-0 text-white ">
      <Link href="/swadhin/#home">
        <Image
          src={"/HO3.png"}
          alt="logo"
          width="100"
          height="100"
          className="p-3 pl-16 h-12 w-40"
        />
      </Link>
      <ul className="flex space-x-3 items-center justify-center pr-4">
        <Link href="/swadhin/#home">
          <li className="p-3 font-navtxt text-xl">Home</li>
        </Link>
        <Link href="/swadhin/#about">
          <li className="p-3 font-navtxt text-xl">About Us</li>
        </Link>
        <Link href="/swadhin/#contact">
          <li className="p-3 font-navtxt text-xl">Contact Us</li>
        </Link>
        <Link href="/swadhin/#event">
          <li className="p-3 font-navtxt text-xl">Events</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
