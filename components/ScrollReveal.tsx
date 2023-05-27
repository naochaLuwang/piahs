"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const revealRef = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView && revealRef.current) {
      gsap.fromTo(
        revealRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [inView]);

  return (
    <div ref={inViewRef} className="scroll-reveal">
      <div ref={revealRef}>{children}</div>
    </div>
  );
};

export default ScrollReveal;
