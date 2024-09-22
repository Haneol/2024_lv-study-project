import React from "react";
import styled, { keyframes } from "styled-components";

const drawCircle = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const drawCheck = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const StyledSVG = styled.svg`
  #circle {
    stroke-dasharray: 351.86;
    stroke-dashoffset: 351.86;
    animation: ${drawCircle} 0.6s ease forwards;
  }

  #check {
    stroke-dasharray: 75;
    stroke-dashoffset: 75;
    animation: ${drawCheck} 0.3s ease forwards 0.6s;
  }
`;

function AnimatedCheckmark() {
  return (
    <StyledSVG
      width="141"
      height="141"
      viewBox="0 0 141 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_45_7652)">
        <circle
          id="circle"
          cx="70.5"
          cy="70.5"
          r="56"
          stroke="#6CEF56"
          strokeWidth="8"
        />
        <path
          id="check"
          d="M46.4183 72.1044L59.7906 85.3729C61.74 87.3073 64.8847 87.3072 66.8341 85.3729L95.3979 57.0306"
          stroke="#6CEF56"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_45_7652"
          x="0.5"
          y="0.5"
          width="140"
          height="140"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.589625 0 0 0 0 1 0 0 0 0 0.523333 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_45_7652"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_45_7652"
            result="shape"
          />
        </filter>
      </defs>
    </StyledSVG>
  );
}

export default AnimatedCheckmark;
