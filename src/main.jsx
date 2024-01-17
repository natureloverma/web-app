import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyNavbar from "./MyNavbar.jsx";
import Footer from "./Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/my-navbar",
    element: <MyNavbar />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
