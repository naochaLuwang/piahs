"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import CarousalButton from "../CarousalButton";
import Link from "next/link";
import NewsCard from "./NewsCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
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
      {loading ? (
        <Skeleton className="w-full h-96" />
      ) : (
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
          containerClass="carousel-container"
        >
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Carousel>
      )}
      <div className="flex justify-center w-full mt-6">
        <Link href="/">
          <p className="px-6 py-3 m-1 text-lg font-medium text-white rounded-md bg-indigo-950">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NewsEvent;
