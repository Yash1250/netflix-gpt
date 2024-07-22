/** @format */

import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default Body;
