import React from "react";
import { ExternalLink, Folder, GitBranch, GithubIcon } from "lucide-react";
import movieApp from "/themovieapp.png";
import placeholder from "/placeholder.webp";

export default () => {
  return (
    <div className="px-10 md:px-20 lg:px-40">
      <section className="py-20">
        <h3 className="text-4xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-500">
          My Projects
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Some of my projects that I have worked on. Some of them are still in
          progress!
        </p>
        <span className="flex flex-col gap-10 py-10 lg:flex-row items-center rounded-md hover:text-teal-500 duration-500 transition-colors">
          <div className="basis-1/3 flex-1">
            <img src={movieApp} className="object-cover rounded-md" alt="" />
          </div>
          <div className="basis-1/3 flex-1 ">
            <h1 className="capitalize  text-lg font-semibold">The movie app</h1>
            <p className="text-sm  font-normal text-gray-800 dark:text-white leading-6 ">
              An app that shows the latest movies with movie ratings and a
              searchbar to search for your favorite movies. This app is made
              with the{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                className="text-teal-500"
              >
                The Movie Database (TMDb) API
              </a>
              . there is a lightmode option aswell but it is based on the
              settings of your device/sytem which the darkmode or lightmode is
              applied.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://hashmishareeb.github.io/movieapp/"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <ExternalLink />
              </a>
              <a
                href="https://github.com/HashmiShareeb/shareebhashmi.github.io"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="flex mt-5 gap-4 dark:text-white">
              <h5 className="text-sm font-light">Javascript</h5>
              <h5 className="text-sm font-light">HTML</h5>
              <h5 className="text-sm font-light">CSS</h5>
            </div>
          </div>
        </span>

        <span className="flex flex-col gap-10 py-10 lg:flex-row-reverse items-center rounded-md hover:text-teal-500 duration-500 transition-colors">
          <div className="basis-1/3 flex-1">
            <img src={placeholder} className="object-cover rounded-md" alt="" />
          </div>
          <div className="basis-1/3 flex-1 ">
            <h1 className="capitalize  text-lg font-semibold">
              Job finder app
            </h1>
            <p className="text-sm  font-normal text-gray-800 dark:text-white leading-6 ">
              An job finder app exlcusive for the webdevelopers and UI/UX
              designers, this app is made on React Native with the use of a
              framework called Native Base. Users can look up every job in the
              IT sector. The app is made with the use of the JSearch API.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                target="_blank"
                className="hover:cursor-pointer dark:text-white"
              >
                <ExternalLink />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:cursor-pointer dark:text-white"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="flex mt-5 gap-4 dark:text-white">
              <h5 className="text-sm font-light">React-Native</h5>
              <h5 className="text-sm font-light">Native Base</h5>
              <h5 className="text-sm font-light">TypeScript</h5>
            </div>
            <button className="inline-flex dark:bg-gray-700 bg-gray-100 dark:text-white text-black rounded-md py-2 p-2 mt-4">
              {" "}
              <GitBranch className="pr-2" />
              In development
            </button>
          </div>
        </span>
        <h3 className="text-2xl font-semibold text-teal-500">
          Some other projects
        </h3>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="dark:bg-gray-800 bg-white rounded-md p-5  col-span-1 row-span-1">
            <a
              href="https://github.com/HashmiShareeb/labo04-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-4 items-center">
                <Folder />
                <h2 className="text-md font-semibold my-4">Colors</h2>
              </div>
              <p className="text-sm leading-6">
                A simple color palette app that shows the color and the hex
                value of the color. The app is made with React Native.
              </p>
            </a>
          </div>
          <div className="dark:bg-gray-800 bg-white rounded-md p-5 overflow-hidden col-span-1 row-span-1">
            <div className="flex gap-4 items-center">
              <Folder />
              <h2 className="text-md font-semibold my-4">Quotes App</h2>
            </div>
            <p className="text-sm leading-6">
              I recently created a quote app using Xamarin Forms and my own API
              with Azure Functions. The app provides users with an extensive
              collection of famous quotes from various sources. The app's clean
              and intuitive interface makes it easy to navigate and search for
              quotes, and the API backend ensures a seamless and fast user
              experience. Thanks to Azure Functions, the app can handle high
              traffic loads without compromising on performance. The app has
              been well received by users, and I am excited to continue
              improving it with new features and functionality.
              <div className="flex mt-4 gap-4"></div>
            </p>
          </div>
          <a href="https://michaelnaessens.be" target="_blank">
            <div className="dark:bg-gray-800 bg-white rounded-md p-5 overflow-hidden col-span-2 row-span-4">
              <div className="flex gap-4 items-center">
                <Folder />
                <h2 className="text-md font-semibold my-4">Michael Naessens</h2>
              </div>
              <p className="text-sm leading-6">
                During my intership in{" "}
                <span>
                  <a
                    href="https://exsited.be"
                    className="text-teal-500"
                    target="_blank"
                  >
                    {" "}
                    Exsited Webdesign
                  </a>{" "}
                  this was one of my first projects, it was a webste for a
                  psychologist. I made this website with the use of a CSM called
                  ProccesWire thats powered on PHP along with SCSS VueJS and css
                  frameworks such as UIkit and Bootstrap.
                </span>
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
