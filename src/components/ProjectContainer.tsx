import React from "react";

export default ({
  title,
  image,
  url,
}: {
  title: string;
  image: any;
  url: string;
}) => {
  return (
    // <div className="w-full md:w-1/2 lg:w-1/3 p-2 rounded-md">
    //   <div className="relative overflow-hidden group">
    //     <img
    //       className="w-full hover:scale-110 transition-all duration-500"
    //       src={image}
    //       alt={title}
    //     />
    //     <h1 className="text-2xl font-semibold text-black dark:text-white absolute bottom-0 left-0 p-4 group-hover:text-teal-500 transition-all duration-500">
    //       {title}
    //     </h1>
    //   </div>
    // </div>

    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <a
        href={url}
        target="_blank"
        className="block relative overflow-hidden group"
      >
        <img
          className="w-full hover:scale-110  group transition-all duration-500"
          src={image}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-150 "></div>
        <h1 className="text-2xl font-semibold text-teal-500 absolute bottom-0 left-0 p-4 group-hover:text-white transition-all z-10">
          {title}
        </h1>
      </a>
    </div>
  );
};
