"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path
      ? "text-green-500"
      : "text-black hover:text-green-500";
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  className="h-full"
                  width={80}
                  height={80}
                  objectFit="contain"
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <div className="hidden text-sm md:flex items-center space-x-2">
            <Link
              href="/#home"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/")}`}
            >
              HOME
            </Link>
            <Link
              href="/news"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/news")}`}
            >
              NEWS
            </Link>
            <Link
              href="/technology-description"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/technology-description")}`}
            >
              TECHNOLOGY
            </Link>
            <Link
              href="/demo-resoil-plant"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/demo-resoil-plant")}`}
            >
              DEMO
            </Link>
            <Link
              href="/sales-program"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/sales-program")}`}
            >
              SALES
            </Link>
            <Link
              href="/soil-washing"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/soil-washing")}`}
            >
              SOIL WASHING
            </Link>
            <Link
              href="/resoil-inbrief"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/resoil-in-brief")}`}
            >
              RESOIL IN BRIEF
            </Link>
            <Link
              href="/plant"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/plant")}`}
            >
              PLANT
            </Link>
            <Link
              href="/rnd"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/rnd")}`}
            >
              R&D
            </Link>
            <Link
              href="/ip"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/ip")}`}
            >
              IP
            </Link>
            <Link
              href="/about-us"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/about-us")}`}
            >
              ABOUT US
            </Link>
            <Link
              href="/#team"
              className="py-4 px-2 text-black font-bold hover:text-green-500 transition duration-300"
            >
              TEAM
            </Link>
            <Link
              href="/case-studies"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/case-studies")}`}
            >
              CASE STUDIES
            </Link>
            <Link
              href="/faq"
              className="py-4 px-2 text-black font-bold hover:text-green-500 transition duration-300"
            >
              FAQ
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-black font-bold hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          href="/#home"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Home
        </Link>
        <Link
          href="/news"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black  transition duration-300"
          onClick={closeNavbar}
        >
          News
        </Link>
        <Link
          href="/technology-description"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black  transition duration-300"
          onClick={closeNavbar}
        >
          Technology
        </Link>
        <Link
          href="/demo-resoil-plant"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Demo
        </Link>
        <Link
          href="/soil-washing"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Soil-Washing
        </Link>
        <Link
          href="/resoil-inbrief"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Resoil in Brief
        </Link>
        <Link
          href="/plant"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Plant
        </Link>
        <Link
          href="/rnd"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          R&D
        </Link>
        <Link
          href="/ip"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          IP
        </Link>
        <Link
          href="/about-us"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          About Us
        </Link>
        <Link
          href="/#team"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Team
        </Link>
        <Link
          href="/case-studies"
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          Case Studies
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
