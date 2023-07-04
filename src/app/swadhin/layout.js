import React from "react";
import Navbar from "./components/Navbar";

function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default HomeLayout;
