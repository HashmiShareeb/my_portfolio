import { AlignLeftIcon, Menu, MoonIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <nav className="py-10 mb-12 flex justify-between">
    //   <h1 className="text-xl capitalize dark:text-white">
    //     <Link to="/">Logo</Link>
    //   </h1>
    // <ul className="flex items-center gap-8">
    //   <li className="dark:text-white active">
    //     <Link to="/about">About</Link>
    //   </li>
    //   <li className="dark:text-white">
    //     <Link to="/projects">Projects</Link>
    //   </li>
    //   <li className="dark:text-white">
    //     <Link to="/blog">Blog</Link>
    //   </li>

    //   <li>
    //     <a
    //       className="bg-gray-700 hover:bg-teal-900 text-white rounded-md px-4 py-2 ml-8"
    //       href="#"
    //     >
    //       Hire Me
    //     </a>
    //     {/* <a className="bg-gradient-to-r from-emerald-200 to-teal-500 rounded-md px-4 py-2 ml-8" href="">
    //     Hire Me
    //   </a> */}
    //   </li>
    //   <li className="dark:text-white bg-gray-700 hover:bg-teal-900 text-white rounded-md p-2">
    //     <MoonIcon />
    //   </li>
    // </ul>
    // </nav>
    <nav className="bg-gray-900">
      <div className="mx-auto px-4 py-2 lg:py-8 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex-shrink-0">
            <h1 className="text-xl capitalize dark:text-white">
              <Link to="/">
                Shareeb<span className="text-teal-500 ml-2 font-semibold">Hashmi</span>
              </Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li className="dark:text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="dark:text-white">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="dark:text-white">
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <a
                  className="bg-gray-700 hover:bg-teal-900 text-white rounded-md px-4 py-2 ml-8"
                  href="#"
                >
                  Hire Me
                </a>
              </li>
              <li className="dark:text-white bg-gray-700 hover:bg-teal-900 text-white rounded-md p-2">
                <MoonIcon />
              </li>
            </ul>
          </div>
          <div
            className="flex md:hidden gap-6
          "
          >
            <a
              className="bg-gray-700 hover:bg-teal-900 text-white rounded-md px-4 py-2 ml-8"
              href="#"
            >
              Hire Me
            </a>
            <button className="dark:text-white bg-gray-700 hover:bg-teal-900 text-white rounded-md p-2 transition-colors duration-300">
              <MoonIcon />
            </button>
            <button
              className="text-white hover:text-gray-300 transition-colors duration-300"
              onClick={toggleNav}
            >
              {isOpen ? <X size={24} /> : <AlignLeftIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "" : "hidden"} md:hidden bg-gray-700 text-white`}
      >
        <ul className="py-3 space-y-2 px-4">
          <li>
            <a
              href="/"
              className="block text-white hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-white hover:text-gray-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block text-white hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  /* nav end */
};
