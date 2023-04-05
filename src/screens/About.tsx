import React from "react";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <div>
      <section className="container" id="#about">
        <h1 className="text-2xl font-semibold text-teal-500">About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <h2 className="text-2xl">My most used technologies</h2>
        <div className="flex flex-wrap gap-4 mt-5">
          <div className="flex flex-row items-center justify-center gap-2">
            <img src="https://img.icons8.com/color/48/000000/react-native.png" />
            <p>React</p>
            <img src="https://img.icons8.com/color/48/000000/react-native.png" />
            <p>React</p>
          </div>
        </div>
      </section>
    </div>
  );
};
