import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/home/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
