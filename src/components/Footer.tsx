import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="dark:bg-gray-900  w-full  h-full text-center py-4">
      <p className="text-gray-600 dark:text-white flex justify-center items-center">
        &copy; 2023
        <span className="ml-2 text-teal-500"> Made by Shareeb Hashmi 😎</span>.
      </p>
    </footer>
  );
};
