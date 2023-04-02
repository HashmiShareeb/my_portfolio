import { AlignLeftIcon, MoonIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl capitalize dark:text-white">logo</h1>
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
        <li className="dark:text-white">
          <MoonIcon />
        </li>
        <li>
          <a
            className="bg-gray-700 hover:bg-teal-900 text-white rounded-md px-4 py-2 ml-8"
            href="#"
          >
            Hire Me
          </a>
          {/* <a className="bg-gradient-to-r from-emerald-200 to-teal-500 rounded-md px-4 py-2 ml-8" href="">
          Hire Me
        </a> */}
        </li>
      </ul>
    </nav>
  );

  /* nav end */
};
