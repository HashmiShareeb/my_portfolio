import React from "react";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="items center  flex min-h-screen bg-white dark:bg-black">
      <div className=" m-auto w-full max-w-xl p-4">
        <div className="rounded-lg border-t border-t-4 border-red-500 bg-white p-6 shadow-sm drop-shadow dark:bg-gray-900 md:p-12 ">
          <Outlet />
        </div>
        <p className=" mt-6 text-center text-xs text-red-300">
          &copy; MCT {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
