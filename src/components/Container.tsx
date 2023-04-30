import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default () => {
  return (
    <main className="bg-gray-200 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
