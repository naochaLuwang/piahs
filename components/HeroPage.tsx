"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const HeroPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isSticky ? "h-[95vh]" : "h-[95vh]"} w-full`}
      style={{
        background:
          "linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.5)), url('../home2.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center h-full px-10 text-white">
        <h1 className="font-medium tracking-wide text-center text-md lg:text-start lg:mt-20">
          Welcome to Pratiksha Institute of Allied Health Science
        </h1>
        <h1 className="hidden pb-2 mt-10 text-2xl font-semibold tracking-wider lg:block">
          Pioneering Innovation in Allied Health Science
        </h1>

        <div className="flex flex-col items-center mt-5 space-x-2 lg:flex-row lg:items-start">
          <Link
            href="http://apply.pratiksha-edu.in/login-user-start?key=9/sWIR83IeQVFPVMtnG+Pg==&sessionID=3845bdd2-bbbe-469a-92b3-3df408776c2f"
            target="_blank"
          >
            <div className="rounded-md px-3.5 py-2 w-fit m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-yellow-500 text-yellow-500 ">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-yellow-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-lg font-medium transition duration-300 text-yellow group-hover:text-neutral-700 ease">
                Apply Now
              </span>
            </div>
          </Link>

          <Link href="/courses">
            <div className="rounded-md px-3.5 w-fit py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white text-white ">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-lg font-medium text-white transition duration-300 group-hover:text-neutral-700 ease">
                Courses Offered
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
