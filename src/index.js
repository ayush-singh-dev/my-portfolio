import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import About from "./Pages/About/About";
import Contect from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Basic from "./Pages/Portfolio/Basic/Basic";
import Advance from "./Pages/Portfolio/Advance/Advance";
import Intermediate from "./Pages/Portfolio/Intermediate/Intermediate";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // 👈 This makes "About" the default page
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contect />,
      },
      {
        path: "portfolio/*",
        element: <Portfolio />,
        children: [
          {
            index: true, // 👈 Default route when "/portfolio" is visited
            element: <Basic />,
          },
          {
            path: "basic",
            element: <Basic />,
          },
          {
            path: "intermediate",
            element: <Intermediate />,
          },
          {
            path: "advance",
            element: <Advance />,
          },
        ],
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
