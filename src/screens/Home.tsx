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
import ProjectContainer from "../components/ProjectContainer";

export default () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="px-10 md:px-20 lg:px-40">
      <section className="py-20">
        <div className="container text-center">
          <div className="flex flex-col justify-center h-full mt-20">
            <h2 className="text-6xl py-2 text-teal-600 font-semibold dark:text-teal-400 md:text-6xl ">
              Shareeb Hashmi
            </h2>
            <h3 className="text-4xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-500">
              Frontend Developer. Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Frontend devoper providing services for programming and design
              content needs. Join me down below and let's get cracking!
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
              <Link
                to="/projects"
                className="capitalize font-bold inline-flex mx-3 items-center border-b-2 border-gray-600 dark:hover:border-white  dark:hover:text-white hover:text-teal-500 hover:border-teal-500 transition-colors "
              >
                My CV
                <span className="mx-auto pl-4">
                  <ExternalLink size={16} />
                </span>
              </Link>
            </div>

            <div className="mt-10 text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/HashmiShareeb"
                className="cursor-pointer p-2 rounded-md bg-gray-700 text-white"
                target="_blank"
              >
                <Github size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/shareeb-hashmi-569b38161/"
                target="_blank"
                className="cursor-pointer p-2 rounded-md bg-gray-700 text-white"
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
      <section className="py-20">
        <div>
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold text-teal-500">
              My recent Projects
            </h3>
            <span className="hover:text-teal-500">
              <Link to="/projects" className="inline-flex gap-4 items-end">
                View more projects <ArrowRight />
              </Link>
            </span>
          </div>
          <div className="flex flex-wrap -mx-2 my-10">
            <ProjectContainer
              title={"The Movie App"}
              url="https://hashmishareeb.github.io/shareebhashmi.github.io/index.html"
              image={"../public/themovieapp.png"}
            />
            {/* <ProjectContainer
              title={"test"}
              url="https://themovieapp.netlify.app/"
              image={"../public/themovieapp.png"}
            />
            <ProjectContainer
              title={"test"}
              url="https://themovieapp.netlify.app/"
              image={"../public/themovieapp.png"}
            /> */}
          </div>

          <h3 className="text-2xl font-semibold text-teal-500">
            Skills and Experience
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
        </div>
        <div className="lg:flex gap-10 ">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white dark:bg-slate-700 flex-1">
            <img className="mx-auto" src="../public/design.png" alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Designs</h3>
            <p className="py-2 text-black dark:text-white">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="py-1">Photoshop</p>
            <p className="py-1">Illustrator</p>
            <p className="py-1">Figma</p>
            <p className="py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-slate-700 flex-1 dark:bg-teal-00 text-gray-800 dark:text-white">
            {/* <Image src={code} width={100} height={100} /> */}
            <img className="mx-auto" src="../public/design.png" alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Coding</h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600 light:text-gray-800">
              Tools I Use
            </h4>
            <p className="py-1">Adobe Photoshop</p>
            <p className="py-1">Adobe Illustrator</p>
            <p className="py-1">Figma</p>
            <p className="py-1">Adobe Xd</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-slate-700 flex-1 dark:bg-teal-00 text-gray-800 dark:text-white">
            {/* <Image src={code} width={100} height={100} /> */}
            <img className="mx-auto" src="../public/design.png" alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Coding</h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600 light:text-gray-800">
              Tools I Use
            </h4>
            <p className="py-1">Adobe Photoshop</p>
            <p className="py-1">Adobe Illustrator</p>
            <p className="py-1">Figma</p>
            <p className="py-1">Adobe Xd</p>
          </div>
        </div>
      </section>
    </div>
  );

  //dark:bg-gray-900
};
