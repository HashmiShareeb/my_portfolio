import { Github, Moon, YoutubeIcon, Linkedin } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    // <div className=" dark:bg-gray-200 bg-gray-900 dark:text-white min-h-screen ">
    //   <div className="container mx-auto px-6 py-8">
    //     <h3 className="text-gray-700 text-4xl font-medium">Logo</h3>
    //   </div>
    // </div>
    <main className="bg-white px-10 ">
      <section className="bg-gray-200 min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">logo</h1>
          <ul className="flex items-center">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a
                className="bg-gray-700 hover:bg-emerald-600 hover:opacity-0.5 text-white rounded-md px-4 py-2 ml-8"
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
        {/* nav end */}
        <div className="p-10">
          <h2 className="text-5xl py-2 text-emerald-500 font-medium">
            Shareeb Hashmi
          </h2>
          <h3 className="text-2xl py-2">Frontend Developer</h3>
          <p className="py-2 text-medium leading-6 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            odio incidunt ab non iusto vero commodi, officiis quis quasi
            temporibus eveniet. Quam esse ex eos cum numquam explicabo autem
            pariatur.
          </p>
          <button>contact me</button>
          <div className=" text-5xl flex justify-start gap-5 mt-5">
            <a href="https://github.com/HashmiShareeb" target="_blank">
              <Github className="cursor-pointer" />
            </a>
            <a href="" target="_blank">
              <Linkedin className="cursor-pointer" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );

  //dark:bg-gray-900
};
