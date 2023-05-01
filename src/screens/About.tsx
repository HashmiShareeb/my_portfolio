import React from "react";
import Navbar from "../components/Navbar";
import { MailIcon } from "lucide-react";
import Myphoto from "/myphoto.jpg";

export default () => {
  return (
    <div className="px-10 md:px-20 lg:px-40">
      <section className="py-20">
        <div className="flex justify-between gap-4 flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-4xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-500">
              About me
            </h3>
            <p className="mt-4 leading-8">
              Hey there! My name is
              <span className="font-semibold text-teal-500">
                {" "}
                Shareeb Hashmi{" "}
              </span>
              I am a recent graduate from a college in Kortrijk, Belgium, where
              I spent two years studying Web Design. During my time in college,
              I gained valuable experience and knowledge in various programming
              languages and techniques. I also had the opportunity to complete
              an internship where I learned a lot and was able to apply my
              skills in a real-world setting. Currently, I am pursuing a
              Bachelor’s degree in Next Web Development to further expand my
              skills and knowledge. I am excited to apply my skills and continue
              to learn and grow in the field of programming.
            </p>
            <h3 className="text-2xl py-2 font-semibold bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-blue-500">
              My favorite technologies
            </h3>
            <div>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Typescript</li>
                <li>JavaScript</li>
                <li>TailwindCSS</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>Vue</li>
              </ul>
            </div>
            <p className="my-10">
              {" "}
              <a
                href="mailto:shareeb.hashmi@student.howest.be"
                className="capitalized py-2 px-4 text-white bg-gray-700 mx-auto hover:bg-teal-900 rounded-md  sm:w-auto"
              >
                Contact
              </a>
            </p>
          </div>

          <div className="w-fit">
            <img src={Myphoto} className=" rounded-md" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
