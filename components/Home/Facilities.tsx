"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollReveal from "../ScrollReveal";

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
    threshold: 0.1, // Adjust the threshold as needed
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const facilityItems =
        containerRef.current?.querySelectorAll(".facility-item");
      if (facilityItems) {
        gsap.from(facilityItems, {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }
  }, [inView]);

  return (
    <div
      className="w-full h-auto px-10 py-20 from-indigo-800 bg-gradient-to-tr to-indigo-950"
      ref={ref}
    >
      <ScrollReveal>
        <h1 className="text-2xl font-semibold tracking-wider text-center text-white">
          Our Facilities
        </h1>
      </ScrollReveal>

      <p className="mt-5 text-sm text-center text-white">
        Combining the best facilities and experienced faculty to provide you
        nothing short of the best
      </p>
      <div
        className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3"
        ref={containerRef}
      >
        {facilities.map((facility, index) => (
          <div className="py-5 hero-detail facility-item" key={facility.title}>
            <div className="flex flex-col items-center space-y-3">
              <Image
                src={facility.icon}
                alt="library"
                width={100}
                height={100}
              />
              <h1 className="text-center text-white">{facility.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
