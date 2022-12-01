import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
function Navigation() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigation;
