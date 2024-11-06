import { useEffect, useRef } from 'react';
import { Gradient } from './Gradient'; // Import the Gradient class from your file

const MovingGradient = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient(canvasRef.current); // Initializes the gradient on the canvas

    return () => {
      gradient.disconnect(); // Clean up when the component is unmounted
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Position behind your main content
      }}
    />
  );
};

export default MovingGradient;
