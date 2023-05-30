"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "../TestimonialCard";
import { Skeleton } from "@/components/ui/skeleton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const Testimonial = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-auto px-6 py-20 bg-gray-100 lg:px-0">
      <div className="py-5 mx-auto max-w-7xl">
        <h1 className="mb-10 text-3xl font-semibold text-center text-yellow-600">
          What our students say?
        </h1>

        {!loading ? (
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            rewindWithAnimation={true}
            autoPlaySpeed={15000}
            arrows={false}
            showDots={true}
          >
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="w-full h-72" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
