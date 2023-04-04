import {
  Github,
  Moon,
  YoutubeIcon,
  Linkedin,
  Link2,
  ExternalLink,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <section>
        <div className="p-10 text-center">
          <div>
            <h2 className="text-5xl py-2 text-black dark:text-white font-semibold">
              Shareeb Hashmi
            </h2>
            <h3 className="text-4xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-700">
              Frontend Developer. Designer
            </h3>
            <p className="py-2 text-md leading-8 text-gray-800 dark:text-white mx-auto md:text-md md:w-1/2 sm:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae odio incidunt ab non iusto vero commodi, officiis quis
              quasi temporibus eveniet. Quam esse ex eos cum numquam explicabo
              autem pariatur.
            </p>

            <div className="flex justify-center items-center gap-8 mt-8">
              {/* <button className="bg-teal-900 rounded-md p-3 font-medium text-teal-400 capitalize">
                my projects
              </button> */}
              <Link
                to="/projects"
                className="bg-teal-900 rounded-md p-4 font-medium text-teal-400 capitalize"
              >
                My Projects
              </Link>
              <Link
                to="/projects"
                className="capitalize font-bold inline-flex mx-3 items-center border-b-2 border-gray-600 hover:border-white hover:text-white"
              >
                My CV
                <span className="mx-auto pl-4">
                  <ExternalLink size={16} />
                </span>
              </Link>
            </div>

            {/* <div className=" text-5xl flex justify-start gap-5 mt-5">
              <a href="https://github.com/HashmiShareeb" target="_blank">
                <Github className="cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <Linkedin className="cursor-pointer" />
              </a>
            </div> */}
          </div>
          {/* <div>
            <h1 className="my-5 text-center text-indigo-500">
              Placeholder img comes here
            </h1>
          </div> */}
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-3xl font-semibold">My Favourite Tools</h2>
        <div className="inline-flex items-center gap-5 justify-between mt-5">
          <div>
            <h3 className="text-2xl font-semibold capitalize">frontend</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold capitalize">design</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold capitalize">backend</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold capitalize">application</h3>
          </div>
        </div>
      </section>
    </div>
  );

  //dark:bg-gray-900
};
