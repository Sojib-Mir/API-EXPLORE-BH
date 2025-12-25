import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* header / navbar */}
      <div>
        <Navbar />
      </div>

      {/* Outlet */}
      <div className="max-w-7xl min-h-[90vh] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
