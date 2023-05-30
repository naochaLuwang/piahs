"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";
import CarousalButton from "../CarousalButton";
import Image from "next/image";
import Link from "next/link";

interface DegreeCarouselProps {
  degrees: Programme[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DegreeCarousel: React.FC<DegreeCarouselProps> = ({ degrees }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!loading ? (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={4000}
          partialVisible={false}
          arrows={false}
          showDots={true}
          customButtonGroup={<CarousalButton />}
          renderButtonGroupOutside={true}
        >
          {degrees.map((degree: Programme) => (
            <div
              key={degree.programmeName}
              className="flex flex-col items-center w-full px-4 py-10 mb-10 mr-2 bg-white border rounded-lg shadow-md sm:w-72"
            >
              <h1 className="h-24 text-lg font-semibold text-center text-blue-700">
                {degree.programmeName}
              </h1>
              <p className="mt-2 font-medium capitalize text-neutral-400">
                {degree.programmeType} Programme
              </p>
              <div className="w-12 h-1 mt-2 bg-yellow-600"></div>

              <p className="mt-5 font-medium text-neutral-500">
                Duration: {degree.programmeDuration} years
              </p>
              <div className="w-48 h-[2px] bg-gray-200"></div>
              <div className="flex flex-col items-center mt-2 font-medium text-neutral-400">
                <h1>Minimum Qualification :</h1>
                <p>12th Standard</p>
              </div>

              <Link href={`courses/${degree.slug}`}>
                <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 mt-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-950 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-sm text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Read More
                  </span>
                </div>
              </Link>

              <div className="rounded-md px-3.5 py-2 m-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-yellow-500 text-yellow-500">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-yellow-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-base font-medium transition duration-300 text-yellow group-hover:text-neutral-700 ease">
                  Apply Online
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="w-full h-[29rem]" />
          ))}
        </div>
      )}
    </>
  );
};

export default DegreeCarousel;
