import React from "react";

const AnimatedMouseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="50"
      viewBox="0 0 30 50"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="28"
        height="48"
        rx="14"
        stroke="white"
        strokeWidth="2"
      />
      <rect x="11" y="9" width="8" height="8" rx="4" fill="white">
        <animate
          attributeName="y"
          values="9; 21; 21; 9; 9"
          keyTimes="0; 0.6; 0.8; 0.801; 1"
          dur="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0 0 1 1; 0 0 0 0; 0 0 0 0"
        />
        <animate
          attributeName="opacity"
          values="1; 1; 0; 0; 1"
          keyTimes="0; 0.6; 0.8; 0.801; 1"
          dur="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0 0 1 1; 0 0 1 1; 0 0 0 0; 0 0 0 0"
        />
      </rect>
    </svg>
  );
};

export default AnimatedMouseIcon;
