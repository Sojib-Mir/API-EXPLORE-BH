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
import ProductDetails from "./components/ProductDetails";

import MyProductManage from "./components/MyProductManage";
import Loading from "./components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/recent-products"),
      },

      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/profile", Component: Profile },

      {
        path: "/add-product",
        Component: AddProduct,
      },

      {
        path: "/products",
        Component: MyProduct,
        loader: () => fetch("http://localhost:5000/products"),
      },

      {
        path: "/product-details/:id",
        Component: ProductDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      {
        path: "/my-products/:email",
        Component: MyProductManage,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-products/${params.email}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
);
