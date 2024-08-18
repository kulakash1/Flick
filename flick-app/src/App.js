import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/home/footer/Footer";
import { Outlet } from "react-router-dom";
import AuthModal from "./components/home/authModal/AuthModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <Navbar />
      <button
          onClick={toggleModal}
          className="bg-blue-500 p-2 rounded"
        >
        Login/Signup
      </button>
      <AuthModal isModalOpen={isModalOpen} onClose={toggleModal} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
