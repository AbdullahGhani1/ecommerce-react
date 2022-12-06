import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
function Navigation() {
  return (
    <div>
      <Navbar />
      <main className="py-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Navigation;
