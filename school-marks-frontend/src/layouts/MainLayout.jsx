import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "../components/Button";

function MainLayout({ children }) {
  return (
    <div className="w-full" data-theme="light">
      <Navbar />
      <div className="container mx-auto mt-4 p-4" data-theme="light">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
