import {
  AlignLeftIcon,
  Github,
  Linkedin,
  Menu,
  MoonIcon,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`px-10 dark:bg-gray-900 sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 py-2 lg:py-6 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-10 w-full">
          <div className="flex-shrink-0">
            <h1 className="text-xl capitalize dark:text-white">
              <Link to="/">
                Shareeb
                <span className="text-teal-500 ml-2 font-semibold">Hashmi</span>
              </Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li className="dark:text-white ">
                <Link to="/">Home</Link>
              </li>
              <li className="dark:text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="dark:text-white">
                <Link to="/projects">Projects</Link>
              </li>

              <li>
                <a
                  className="bg-gray-700 hover:bg-teal-900 text-white rounded-md px-4 py-2 ml-8"
                  href="mailto:shareeb.hashmi@student.howest.be"
                >
                  Contact
                </a>
              </li>
              {/* <li className="dark:text-white bg-gray-700 hover:bg-teal-900 text-white rounded-md p-2">
                <a href="">
                  <Github size={24} />
                </a>
              </li>
              <li className="dark:text-white bg-gray-700 hover:bg-teal-900 text-white rounded-md p-2">
                <Linkedin size={24} />
              </li> */}
            </ul>
          </div>
          <div
            className="flex md:hidden gap-6
          "
          >
            <a className="capitalized py-2 px-4 text-white bg-gray-700 mx-auto hover:bg-teal-900 rounded-md hidden md:block  sm:w-auto">
              Contact
            </a>
            {/* <button className="dark:text-white bg-gray-700 hover:bg-teal-900 text-white rounded-md p-2 transition-colors duration-300">
              <MoonIcon />
            </button> */}
            <button
              className="text-white hover:text-gray-300 transition-all duration-500"
              onClick={toggleNav}
            >
              {isOpen ? <X size={24} /> : <AlignLeftIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "" : "hidden"} md:hidden bg-gray-900 text-white`}
      >
        <ul className="py-3 space-y-2 px-4">
          <li>
            <Link
              to="/"
              className="block text-white hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white hover:text-gray-300 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block text-white hover:text-gray-300 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="cvshareebhashmi2022-updatedMCT.pdf"
              target="_blank"
              className="capitalized py-2 px-2 text-start text-white bg-gray-700  hover:bg-teal-900 rounded-md sm:w-auto"
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
