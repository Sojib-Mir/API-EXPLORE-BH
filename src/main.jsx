import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProduct";
import MyProduct from "./components/MyProduct";
import Loading from "./components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/profile", Component: Profile },
      { path: "/add-product", Component: AddProduct },
      { path: "/my-product", Component: MyProduct },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
