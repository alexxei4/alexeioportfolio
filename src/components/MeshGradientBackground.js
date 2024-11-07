"use client";
import React, { useEffect, useState } from "react";
import { Gradient } from "./Gradient";
import { motion } from "framer-motion";


function MeshGradientBackground({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    const loadTimeout = setTimeout(() => setIsLoaded(true), 300); // Adjusted delay
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Gradient Canvas */}
      <canvas
        id="gradient-canvas"
        style={{
          position: "absolute",  // Positioned behind content
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,  // Ensure the gradient stays in the background
          "--gradient-color-1": "#000000",  // You can change these colors
          "--gradient-color-2": "#ff0000",  // to customize the gradient
          "--gradient-color-3": "#ffffff",
        }}
      />
      
      {/* Welcome Text Animation */}
      {isLoaded && (
  <motion.div
    className="welcome-text"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{
      position: "absolute",  // Positioned in the center
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      zIndex: 1,  // Ensure the welcome text is above the gradient
    }}
  >
    <h2 style={{ display: 'inline-block', fontFamily: 'Helvetica Neue, sans-serif' ,textShadow: '2px 2px 5px red' }}>
      Hello :) , My name is
      <span style={{ fontFamily: 'Editorial New, serif', fontWeight: 'bold' }}>
        &nbsp; Alexei Ougriniouk
      </span>
    </h2>
    <h1
      style={{
        display: 'block',  // Change to block so it moves to a new line
        textAlign: 'left',
        fontFamily: 'Helvetica Neue, sans-serif',
        padding: '10px',
        
        textShadow: '2px 2px 5px red'  // Red fuzzy outline effect
      }}
    >
      Welcome to my portfolio
    </h1>
    <h3
      style={{
        fontFamily: 'Helvetica Neue, sans-serif',
        textAlign: 'right',
        padding: '10px',
        textShadow: '2px 2px 5px red'  // Red fuzzy outline effect
      }}
    >
      I am a Junior Software Developer that is <br></br>eager to put my programming skills<br></br> to use in the workplace
    </h3>
  </motion.div>
)}

      
      {/* Main Content */}
      <div
        style={{
          position: "relative",  // Ensures content is above the canvas and other animations
          zIndex: 1,  // Content should appear above the gradient
          paddingTop: "60px",  // Padding to avoid overlap with the welcome text
        }}
      >
        {children}  {/* The sections passed as children will appear here */}
      </div>
    </div>
  );
}

export default MeshGradientBackground;

