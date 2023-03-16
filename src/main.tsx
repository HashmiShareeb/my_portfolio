import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        className="text-4xl text-emerald-500 bg-white dark:bg-gray-800 dark:text-white"
      >
        Hello world!
      </div>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
