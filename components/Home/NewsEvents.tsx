"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";
import CarousalButton from "../CarousalButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import NewsCard from "./NewsCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const NewsEvent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className="w-full h-auto py-20 px-14 lg:px-28">
      <h1 className="mb-10 text-3xl font-medium text-center text-blue-900">
        News & Events
      </h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlaySpeed={4000}
        arrows={false}
        showDots={true}
        customButtonGroup={<CarousalButton />}
        renderButtonGroupOutside={true}
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Carousel>
      <div className="flex justify-center w-full">
        <div className="rounded-md w-fit px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-950 ">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-lg transition duration-300 text-indigo-950 group-hover:text-white ease">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
