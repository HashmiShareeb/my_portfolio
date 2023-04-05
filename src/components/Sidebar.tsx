import { Link } from "react-router-dom";
import React from "react";

export default () => {
  return (
    <aside className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-900">
      <div className="sticky top-0 left-0 right-0 bottom-0">
        <ul className="flex flex-col gap-8 text-white text-lg p-4">
          <li className="dark:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="dark:text-white">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="dark:text-white">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
