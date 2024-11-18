"use client";
import React, { useEffect, useState } from "react";
import { Gradient } from "./Gradient";
import { motion } from "framer-motion";
import { gsap } from 'gsap';




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
      <style jsx global>{`
        @font-face {
          font-family: 'PP Mori';
          src: url('/fonts/PPMori-Regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'PP Mori';
          src: url('/fonts/PPMori-RegularItalic.otf') format('opentype');
          font-weight: normal;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: 'PP Mori';
          src: url('/fonts/PPMori-SemiBold.otf') format('opentype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'PP Mori';
          src: url('/fonts/PPMori-Extralight.otf') format('opentype');
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
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
          "--gradient-color-2": "#07d3ba",  // to customize the gradient          "--gradient-color-3": "#032d34",
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
            position: "absolute",
            top: "50%",
            left: "5%",  // Position text on the left side
            transform: "translateY(-50%)",
            textAlign: "left",  // Align text to the left
            zIndex: 1,
            width: "100%",
            maxWidth: "800px",
            padding: "0 20px",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "PP Mori, sans-serif",
              fontWeight: "200",
              fontSize: "2rem",
              color: "#FFFCE1",  // Set text color to white
              textShadow: "2px 2px 4px black",  // Black outline
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Hello :) , My name is{" "}
            <span
              style={{
                fontFamily: "ABCAsfalt-CompressedLight-Trial, sans-serif",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#FFFCE1",
                textShadow: "2px 2px 4px black",
              }}
            >
              Alexei Ougriniouk
            </span>
          </motion.h2>

          <h1
            style={{
              display: "block",
              textAlign: "left",
              fontFamily: "Helvetica Neue, sans-serif",
              padding: "10px",
              color: "#FFFCE1",  // Set text color to white
              textShadow: "2px 2px 4px black",  // Black outline
              fontSize: "3rem",
            }}
          >
            Welcome to my portfolio
          </h1>

          <h3
            style={{
              fontFamily: "PPMori-ExtralightItalic, sans-serif",
              fontWeight: "200",
              fontStyle: "normal",
              fontdisplay: "swap",
              textAlign: "left",
              padding: "10px",
              color: "#FFFCE1",  // Set text color to white
              textShadow: "2px 2px 4px black",  // Black outline
              fontSize: "1.5rem",
              maxWidth: "600px",
            }}
          >
            I am a  Software Developer that is <br /> eager to put my programming skills
            <br /> to use in the workplace
          </h3>
        </motion.div>
      )}

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "60px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default MeshGradientBackground;

