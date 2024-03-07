import {
  Github,
  Moon,
  YoutubeIcon,
  Linkedin,
  Link2,
  ExternalLink,
  Folder,
  Code2Icon,
  LucideBrush,
  GithubIcon,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Projects from "../components/ProjectsCards";

export default () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 min-h-screen">
      <section className="lg:py-20">
        <div className="container text-center">
          <div className="flex flex-col justify-center h-full mt-20">
            <h3>
              <span className="text-lg font-semibold ">Hello there 👋</span>
            </h3>
            <h2 className="text-4xl py-2 font-semibold lg:text-6xl md:text-5xl">
              Shareeb Hashmi
            </h2>
            <h3 className="text-4xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-500">
              Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I'm a graduate in MIT currently studying{" "}
              <Link
                to="https://mct.be/"
                target="_blank"
                className="text-teal-500 hover:underline hover:text-teal-400 transition-colors"
              >
                MCT-Next Web Developer{" "}
              </Link>
              in Howest in Belgium. I'm passionate about web development and I
              love to create web applications. I'm a quick learner and I'm
              always looking for new challenges.
            </p>

            <div className="flex justify-center gap-8 mt-8">
              <Link
                to="/projects"
                className="bg-teal-900 inline-flex rounded-md p-4 font-medium items-center text-teal-400 capitalize hover:bg-teal-600 transition-colors"
              >
                My Projects
                <span className="mx-auto pl-4">
                  <Folder size={16} />
                </span>
              </Link>
              <a
                href="/CV-shareeb_2023.pdf"
                target="_blank"
                className="capitalize font-bold inline-flex mx-3 items-center border-b-2 border-gray-600 dark:hover:border-white  dark:hover:text-white hover:text-teal-500 hover:border-teal-500 transition-colors "
              >
                My CV
                <span className="mx-auto pl-4">
                  <ExternalLink size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* <Projects /> */}
      </section>
    </div>
  );

  //dark:bg-gray-900
};
