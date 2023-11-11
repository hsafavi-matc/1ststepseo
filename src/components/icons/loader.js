import React from 'react';
import './IconLoader.css'; // Assuming you have a CSS file for animations

const IconLoader = () => {
  const animationDuration = 4; // CSS variable

  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{ '--animation-duration': `${animationDuration}s` }}>
      <title>Loader Logo</title>
      <defs>
        <clipPath id="octagon-clip-path">
          <polygon fill="none" points="50,5 11,27 11,72 50,95 89,73 89,28 50,5" />
        </clipPath>
      </defs>
      <g clipPath="url(#octagon-clip-path)">
        <text id="hs-text" x="30" y="65" fontSize="45" fill="currentColor">
          hs
        </text>
        <polygon
          id="octagon"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="50,5 11,27 11,72 50,95 89,73 89,28 50,5"
        />
      </g>
    </svg>
  );
};

export default IconLoader;
