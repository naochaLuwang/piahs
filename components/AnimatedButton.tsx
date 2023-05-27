"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedButton = () => {
  const [inViewRef, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const buttonClasses = `h-full transition-all duration-1000 ease-in-out w-full ${
    isVisible ? "bg-blue-500" : "bg-transparent"
  }`;

  const labelClasses = `${
    isVisible ? "inline transition-all duration-1000 ease-in-out" : "hidden"
  }`;

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div ref={inViewRef} className="flex items-center justify-center w-full">
      <div className="h-10 border-2 w-44">
        <button
          className={buttonClasses}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={labelClasses}>View All</span>
        </button>
      </div>
    </div>
  );
};

export default AnimatedButton;
