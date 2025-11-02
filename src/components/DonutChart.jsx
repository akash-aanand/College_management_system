import React, { useEffect, useRef } from 'react';

/**
 * DonutChart Component
 * Renders a circular donut chart using SVG.
 *
 * @param {object} props
 * @param {number} props.percentage - The percentage value to display (0-100).
 * @param {string} [props.color="text-green-500"] - Tailwind color class for the progress ring.
 * @param {string} [props.bgColor="text-gray-200"] - Tailwind color class for the background ring.
 * @param {number} [props.size=120] - The width and height of the SVG.
 * @param {number} [props.strokeWidth=10] - The thickness of the chart rings.
 */
const DonutChart = ({ 
  percentage, 
  color = "text-green-500", 
  bgColor = "text-gray-200", 
  size = 120, 
  strokeWidth = 10 
}) => {
  const svgRef = useRef(null);
  const [progressColor, setProgressColor] = useState('#22c55e'); // Default green-500
  const [backgroundColor, setBackgroundColor] = useState('#e5e7eb'); // Default gray-200

  // Calculate chart dimensions
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  // This effect resolves the Tailwind color classes to actual hex/rgb values
  // so they can be used inside the SVG's `stroke` attribute.
  useEffect(() => {
    if (svgRef.current) {
      // Create temporary elements to measure computed styles
      const tempProgressEl = document.createElement('div');
      tempProgressEl.className = color;
      tempProgressEl.style.display = 'none';
      document.body.appendChild(tempProgressEl);
      
      const tempBgEl = document.createElement('div');
      tempBgEl.className = bgColor;
      tempBgEl.style.display = 'none';
      document.body.appendChild(tempBgEl);

      // Get computed colors
      const computedProgressColor = window.getComputedStyle(tempProgressEl).color;
      const computedBgColor = window.getComputedStyle(tempBgEl).color;
      
      // Convert RGB (which getComputedStyle returns) to Hex if needed,
      // but SVG stroke property handles RGB strings fine.
      setProgressColor(computedProgressColor);
      setBackgroundColor(computedBgColor);

      // Clean up temporary elements
      document.body.removeChild(tempProgressEl);
      document.body.removeChild(tempBgEl);
    }
  }, [color, bgColor]);

  return (
    <div 
      ref={svgRef}
      className="relative flex items-center justify-center" 
      style={{ width: size, height: size }}
    >
      <svg className="absolute inset-0" width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transform -rotate-90 origin-center transition-all duration-500"
        />
      </svg>
      {/* Percentage Text */}
      <span className="absolute text-2xl font-bold text-gray-700">
        {percentage}%
      </span>
    </div>
  );
};

// A helper state is needed because useEffect runs *after* the initial render.
// We use a simple React state to hold the computed color values.
const { useState } = React;

export default DonutChart;

