import { ExternalLink, GithubIcon } from "lucide-react";

export default () => {
  return (
    <div className="px-10 md:px-20 lg:px-40">
      <section className="py-20">
        <h3 className="text-2xl font-semibold text-teal-500">My Projects</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Some of my projects that I have worked on. Some of them are still in
          progress!
        </p>
        <div className="flex flex-col gap-10 py-10 lg:flex-row items-center rounded-md">
          <div className="basis-1/3 flex-1">
            <img
              src="../themovieapp.png"
              className="object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <h1 className="capitalize text-teal-500 text-lg font-semibold">The movie app</h1>
            <p className="text-sm  font-normal text-white leading-6 ">
              An app that shows the latest movies with movie ratings and a
              searchbar to search for your favorite movies. This app is made with the <a href="https://www.themoviedb.org/" target="_blank" className="text-teal-500">The Movie Database (TMDb) API</a>.
              there is a lightmode option aswell but it is based on the settings of your device/sytem which the darkmode or lightmode is applied.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://hashmishareeb.github.io/shareebhashmi.github.io/index.html"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <ExternalLink />
              </a>
              <a
                href="https://hashmishareeb.github.io/shareebhashmi.github.io/index.html"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="flex mt-5 gap-4">
              <h5 className="text-sm font-medium">Javascript</h5>
              <h5 className="text-sm font-medium">HTML</h5>
              <h5 className="text-sm font-medium">CSS</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row-reverse items-center rounded-md">
          <div className="basis-1/3 flex-1">
            <img
              src="../themovieapp.png"
              className="object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <h1 className="capitalize text-teal-500 text-lg font-semibold">The movie app</h1>
            <p className="text-sm  font-normal text-white leading-6 ">
              An app that shows the latest movies with movie ratings and a
              searchbar to search for your favorite movies. This app is made with the <a href="https://www.themoviedb.org/" target="_blank" className="text-teal-500">The Movie Database (TMDb) API</a>.
              there is a lightmode option aswell but it is based on the settings of your device/sytem which the darkmode or lightmode is applied.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://hashmishareeb.github.io/shareebhashmi.github.io/index.html"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <ExternalLink />
              </a>
              <a
                href="https://hashmishareeb.github.io/shareebhashmi.github.io/index.html"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="flex mt-5 gap-4">
              <h5 className="text-sm font-medium">Javascript</h5>
              <h5 className="text-sm font-medium">HTML</h5>
              <h5 className="text-sm font-medium">CSS</h5>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-teal-500">
          My other mini projects
        </h3>
      </section>
    </div>
  );
};
