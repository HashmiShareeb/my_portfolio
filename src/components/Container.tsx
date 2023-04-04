import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default () => {
  return (
    <main className="px-10 bg-gray-200 text-black dark:text-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};
