import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Signin from "./pages/Sign-in"
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello world!</h1>,
  },
  {
    path: "/sign-in",
    element: <Signin />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/log-in",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);