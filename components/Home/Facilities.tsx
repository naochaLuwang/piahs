"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Slide } from "react-awesome-reveal";

interface FacilityProps {
  icon: string;
  title: string;
}

const facilities: FacilityProps[] = [
  {
    icon: "/library1.png",
    title: "Library with plenty of Books",
  },
  {
    icon: "/laboratory1.png",
    title: "World class Laboratories",
  },
  {
    icon: "/hostel1.png",
    title: "Hostel Facility",
  },
  {
    icon: "/scholarship1.png",
    title: "Scholarship for deserving students",
  },
  {
    icon: "/sports1.png",
    title: "Sports & Game facility",
  },
  {
    icon: "/classroom1.png",
    title: "World class Classroom",
  },
];

const Facilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
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
      duration: 0.8,
      ease: "power3.out",
    });
  };

  if (inView) {
    revealDetails();
  }

  return (
    <div className="w-full h-auto px-10 py-20 bg-indigo-950" ref={ref}>
      <Slide>
        <h1 className="text-2xl font-semibold tracking-wider text-center text-white">
          Our Facilities
        </h1>
      </Slide>

      <p className="mt-5 text-sm text-center text-white">
        Combining the best facilities and experienced faculty to provide you
        nothing short of the best
      </p>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {facilities.map((facility, index) => (
          <motion.div
            className="py-5 hero-detail"
            key={facility.title}
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div
              key={facility.title}
              className="flex flex-col items-center space-y-3 facility-item"
            >
              <Image
                src={facility.icon}
                alt="library"
                width={100}
                height={100}
              />
              <h1 className="text-center text-white">{facility.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
