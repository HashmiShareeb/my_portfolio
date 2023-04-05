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
      <section className="py-20">
        <div className="container text-center">
          <div className="flex flex-col justify-center h-full mt-20">
            <h2 className="lg:text-6xl text-4xl py-2 text-black dark:text-white font-semibold">
              Shareeb Hashmi
            </h2>
            <h3 className="lg:text-4xl text-2xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-700">
              Frontend Developer. Designer
            </h3>
            <p className="py-2 lg:text-lg sm:text-md leading-8 text-gray-800 dark:text-white mx-auto md:text-md lg:w-1/2 md:w-auto sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae odio incidunt ab non iusto vero commodi, officiis quis
              quasi temporibus eveniet. Quam esse ex eos cum numquam explicabo
              autem voluptate.
              <br />
              <a href="https://mct.be/" target="_blank">
                pariatur
              </a>
              .
            </p>

            <div className="flex justify-center gap-8 mt-8">
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

            <div className=" text-5xl flex justify-center gap-5 mt-10">
              <a
                href="https://github.com/HashmiShareeb"
                className="cursor-pointer p-2 rounded-md bg-gray-700"
                target="_blank"
              >
                <Github size={26} />
              </a>
              <a
                href=""
                target="_blank"
                className="cursor-pointer p-2 rounded-md bg-gray-700"
              >
                <Linkedin size={26} />
              </a>
            </div>
          </div>
          {/* <div>
            <h1 className="my-5 text-center text-indigo-500">
              Placeholder img comes here
            </h1>
          </div> */}
        </div>
      </section>
    </div>
  );

  //dark:bg-gray-900
};
