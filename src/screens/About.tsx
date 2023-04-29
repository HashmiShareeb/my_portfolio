import React from "react";
import Navbar from "../components/Navbar";
import ProjectContainer from "../components/ProjectDetail";

export default () => {
  return (
    <div className="px-10 md:px-20 lg:px-40">
      <section className="py-20">
        <h3 className="text-3xl font-semibold text-teal-500">About Me</h3>
        <p className="mt-4 leading-8">
          Hey there! My name is
          <span className="font-semibold text-teal-500"> Shareeb Hashmi </span>I
          am a recent graduate from a college in Kortrijk, Belgium, where I
          spent two years studying programming. During my time in college, I
          gained valuable experience and knowledge in various programming
          languages and techniques. I also had the opportunity to complete an
          internship where I learned a lot and was able to apply my skills in a
          real-world setting. Currently, I am pursuing a Bachelor’s degree in
          Next Web Development to further expand my skills and knowledge. I am
          excited to apply my skills and continue to learn and grow in the field
          of programming.
        </p>
        <h2 className="text-2xl">My most used technologies</h2>
      </section>
    </div>
  );
};
