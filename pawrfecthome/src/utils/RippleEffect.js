import React, { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion"; // Add Framer Motion import

const RippleEffect = ({ 
  color = "rgba(255, 255, 255, 0.4)", 
  duration = 0.6,
  scale = 4,
  initialOpacity = 0.8 
}) => {
  const [ripples, setRipples] = useState([]);

  useLayoutEffect(() => {
    // Clean up ripples after animation completes
    const timeoutIds = [];
    ripples.forEach((ripple) => {
      const timeoutId = setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((r) => r.key !== ripple.key)
        );
      }, duration * 1000); // Convert to milliseconds
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [ripples, duration]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;

    // Add a unique shape parameter for each ripple
    const shape = Math.random() > 0.7 ? "circle" : "square";
    const rippleColor = Math.random() > 0.8 ? 
      `hsl(${Math.random() * 360}, 80%, 60%, ${initialOpacity})` : color;

    const newRipple = {
      key: Date.now(),
      style: {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: rippleColor,
        borderRadius: shape === "circle" ? "50%" : "30%",
      },
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  return {
    createRipple,
    rippleElements: ripples.map((ripple) => (
      <motion.span
        key={ripple.key}
        className="ripple"
        style={ripple.style}
        initial={{ transform: "scale(0)" }}
        animate={{ transform: `scale(${scale})`, opacity: 0 }}
        transition={{ 
          duration: duration, 
          ease: "easeOut" 
        }}
      />
    )),
  };
};

export default RippleEffect;
