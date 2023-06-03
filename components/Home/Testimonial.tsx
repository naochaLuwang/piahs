"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "../TestimonialCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TbSquareChevronsLeft, TbSquareChevronsRight } from "react-icons/tb";

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

interface TestProps {
  testimonials: TestimonialProps[];
}

const Testimonial: React.FC<TestProps> = ({ testimonials }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-auto px-6 py-20 bg-gray-100 lg:px-0">
      <div className="relative py-5 mx-auto max-w-7xl">
        <h1 className="mb-10 text-4xl font-semibold tracking-wider text-center text-yellow-600 font-babas">
          Feedback from our Students
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
            customButtonGroup={<TestimonialButton />}
            renderButtonGroupOutside={true}
          >
            {testimonials &&
              testimonials.map((testimonial: TestimonialProps) => (
                <div className="p-1" key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div className="p-5" key={index}>
                <Skeleton className="w-full h-72" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

export const TestimonialButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute right-0 flex items-center justify-center w-full mt-2 lg:justify-end -bottom-5 lg:top-3 carousel-button-group">
      <div
        className={currentSlide === 0 ? "disable" : "cursor-pointer"}
        onClick={() => previous()}
      >
        <TbSquareChevronsLeft className="w-10 h-10 text-indigo-950" />
      </div>
      <div onClick={() => next()} className="cursor-pointer">
        <TbSquareChevronsRight className="w-10 h-10 text-indigo-950" />
      </div>
    </div>
  );
};
