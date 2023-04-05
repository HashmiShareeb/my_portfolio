import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default () => {
  return (
    <main className="lg:px-48 md:px-10 sm:px-10 bg-gray-200 text-black dark:text-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
