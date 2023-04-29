import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <section className="py-20">
      {/* <div className="lg:flex gap-10 ">
        <h3 className="text-3xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-500">
          Frontend Developer. Designer
        </h3>
        <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white dark:bg-slate-700 flex-1">
          <img className="mx-auto" src="../public/themovieapp.png" alt="" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">MovieApp</h3>
          <p className="py-2">
            A movie app that allows you to search for movies and tv shows. You
            can
          </p>
        </div>
      </div> */}
      <div className="inline-flex w-full my-4 lg:my-0">
        <Link
          to="/projects"
          className="inline-flex items-end text-end justify-end w-full"
        >
          View all projects <ArrowRight />
        </Link>
      </div>
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className=" max-w-2xl mx-auto lg:max-w-xl lg:mx-0 rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full hover:scale-110 transition-all duration-500 ease-in-out"
            src="../public/themovieapp.png"
            alt="Placeholder Image"
          />
          <div className="px-6 py-4 bg-gray-700 dark:text-white">
            <div className="font-semibold text-xl my-2">MovieApp</div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  //   <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-slate-700 flex-1 dark:bg-teal-00 text-gray-800 dark:text-white">
  //   {/* <Image src={code} width={100} height={100} /> */}
  //   <img className="mx-auto" src="../public/design.png" alt="" />
  //   <h3 className="text-lg font-medium pt-8 pb-2 ">Coding</h3>
  //   <p className="py-2">
  //     Do you have an idea for your next great website? Let's make it a
  //     reality.
  //   </p>
  //   <h4 className="py-4 text-teal-600 light:text-gray-800">
  //     Tools I Use
  //   </h4>
  //   <p className="py-1">Adobe Photoshop</p>
  //   <p className="py-1">Adobe Illustrator</p>
  //   <p className="py-1">Figma</p>
  //   <p className="py-1">Adobe Xd</p>
  // </div>
  // <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-slate-700 flex-1 dark:bg-teal-00 text-gray-800 dark:text-white">
  //   {/* <Image src={code} width={100} height={100} /> */}
  //   <img className="mx-auto" src="../public/design.png" alt="" />
  //   <h3 className="text-lg font-medium pt-8 pb-2 ">Coding</h3>
  //   <p className="py-2">
  //     Do you have an idea for your next great website? Let's make it a
  //     reality.
  //   </p>
  //   <h4 className="py-4 text-teal-600 light:text-gray-800">
  //     Tools I Use
  //   </h4>
  //   <p className="py-1">Adobe Photoshop</p>
  //   <p className="py-1">Adobe Illustrator</p>
  //   <p className="py-1">Figma</p>
  //   <p className="py-1">Adobe Xd</p>
  // </div>
};
