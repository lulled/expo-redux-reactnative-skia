import React, { useEffect } from 'react';
import { Skia, Circle, useValue } from '@shopify/react-native-skia';

export default function Spinner() {
  // Define wheel properties (radius, segments, colors, etc.)
  const wheelRadius = useValue(100);
  const rotationAngle = useValue(0);

  // Start spinning the wheel on component mount
  useEffect(() => {
    const spinInterval = setInterval(() => {
      rotationAngle.setValue((prevAngle) => prevAngle + 1); // Increment rotation angle
    }, 10); // Adjust the interval as needed for smoother animation or performance

    // Clean up interval on component unmount
    return () => clearInterval(spinInterval);
  }, []);

  return (
    <Skia width={200} height={200}> {/* Adjust width and height as needed */}
      {/* Render the spinning wheel */}
      <Circle
        cx={100} // Center X coordinate
        cy={100} // Center Y coordinate
        r={wheelRadius.value} // Use wheelRadius value directly
        fill="blue" // Example fill color
        stroke="black" // Example stroke color
        strokeWidth={2} // Example stroke width
        rotation={rotationAngle.value} // Rotate the circle based on rotation angle
      />
    </Skia>
  );
}
