"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { motion, useMotionValue, useTransform } from "framer-motion";

const heroDetails = [
  {
    title: "Quality Education",
    description:
      "Our top priority is providing quality education with integrity to its student population",
    icon: "icon4.png",
  },
  {
    title: "Best Location",
    description: "Our location is in a peaceful page far from the city buzz",
    icon: "icon3.png",
  },
  {
    title: "Small Size Classroom",
    description:
      "We limit the size of each class to 17 students, maximizing student-teacher interaction and promoting student-centered learning",
    icon: "icon2.png",
  },
  {
    title: "Dedicated Teachers",
    description:
      "Our teachers spend countless hours preparing lessons to support your academic, cultural, and professional growth.",
    icon: "icon1.png",
  },
];

const Whychooseus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const revealDetails = () => {
    gsap.from(".hero-detail", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  };

  if (inView) {
    revealDetails();
  }

  return (
    <div className="w-full h-auto px-10 py-20" ref={ref}>
      <h1 className="text-3xl tracking-wide text-center text-indigo-950 lg:text-start">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4">
        {heroDetails.map((detail, index) => (
          <motion.div
            className="flex-col items-center hidden py-5 border-0 lg:flex lg:items-start lg:border-r-2 hero-detail"
            key={detail.title}
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <Image
              src={`/content/site/${detail.icon}`}
              alt={detail.title}
              width={100}
              height={100}
            />
            <h1 className="mt-4 text-xl font-bold">{detail.title}</h1>
            <p className="mt-2 text-base text-center text-gray-500 lg:text-start">
              {detail.description}
            </p>
          </motion.div>
        ))}
        {heroDetails.map((detail, index) => (
          <div
            className="flex flex-col items-center py-5 border-0 lg:hidden lg:items-start lg:border-r-2 hero-detail"
            key={detail.title}
          >
            <Image
              src={`/content/site/${detail.icon}`}
              alt={detail.title}
              width={100}
              height={100}
            />
            <h1 className="mt-4 text-xl font-bold">{detail.title}</h1>
            <p className="mt-2 text-base text-center text-gray-500 lg:text-start">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
