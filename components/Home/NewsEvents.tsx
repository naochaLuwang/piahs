"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";
// import urlFor from "@/lib/urlFor";
// import CustomLeftArrow from "./CustomLeftArrow";
// import CustomRightArrow from "./CustomRightArrow";
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
    <div className="w-full h-auto px-10 py-20 lg:px-28">
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
        showDots={false}
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Carousel>
      <div className="flex items-center justify-center w-full mt-10">
        <h1 className="px-4 py-2 text-center text-white bg-blue-900 rounded-md w-fit">
          See More
        </h1>
      </div>
    </div>
  );
};

export default NewsEvent;
