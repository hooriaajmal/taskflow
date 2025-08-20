// src/pages/TaskFlow.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const TaskFlow = () => {
  return (
    <div className="bg-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
};

export default TaskFlow;