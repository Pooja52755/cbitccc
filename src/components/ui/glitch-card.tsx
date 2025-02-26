"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const GlitchCard = ({ children, className = "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const glitchVariants = {
    normal: { x: 0, y: 0 },
    glitch: {
      x: [0, -2, 2, -2, 2, 0],
      y: [0, 2, -2, 2, -2, 0],
      filter: ["none", "hue-rotate(90deg)", "none", "invert(0.5)", "hue-rotate(-90deg)", "none"],
      transition: {
        duration: 0.3,
        repeat: 0,
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Random chance to trigger glitch effect on hover
    if (Math.random() > 0.5) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      animate={isGlitching ? "glitch" : "normal"}
      variants={glitchVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`transform-gpu ${className}`}
    >
      {children}
      
      {/* Glitch overlay elements */}
      <div 
        className={`absolute inset-0 bg-blue-500/10 opacity-0 ${isHovered ? 'animate-glitch-overlay' : ''}`}
        style={{pointerEvents: 'none'}}
      />
      
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden" style={{pointerEvents: 'none'}}>
          <div className="glitch-scan"></div>
        </div>
      )}
    </motion.div>
  );
};
