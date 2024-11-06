// src/components/MeshGradientBackground.js
import React, { useEffect } from "react";
import { Gradient } from "./Gradient"; // Import Gradient from gradient.js

function MeshGradientBackground() {
  useEffect(() => {
    // Initialize the gradient after the component mounts
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Canvas for the gradient background */}
      <canvas
        id="gradient-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "--gradient-color-1": "#000000", // Replace with your color scheme
          "--gradient-color-2": "#ff0000",
          "--gradient-color-3": "#ffffff",
        }}
      />

      <div className="container h-screen mx-auto flex justify-center items-center relative">
        <div className="flex flex-col justify-start px-8 md:px-48 space-y-8 md:space-y-12 z-10">
          {/* Inline keyframes animation for text color cycling */}
          <style>
            {`
              @keyframes colorCycle {
                0% { color: black; }
                50% { color: red; }
                100% { color: white; }
              }

              .color-animate {
                animation: colorCycle 6s linear infinite;
              }
            `}
          </style>

          {/* Header Text */}
          <div className="text-4xl md:text-5xl color-animate font-bold tracking-[8px] md:tracking-[16px] leading-normal">
            Hi, I'm Alexei Ougriniouk
          </div>

          {/* Subheader Text */}
          <div className="pl-1 text-sm md:text-base tracking-[2px] md:tracking-[3px]">
            I am a Web Developer specializing in responsive, modern web designs.
          </div>

          {/* Call to Action Button */}
          <button
            className="text-xs tracking-[1.5px] md:tracking-[2.5px] text-white font-bold w-32 md:w-40 h-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeshGradientBackground;
