"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "../TestimonialCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const Testimonial = () => {
  return (
    <div className="w-full h-auto px-6 py-20 bg-gray-100 lg:px-0">
      <div className="py-5 mx-auto max-w-7xl">
        <h1 className="mb-10 text-3xl font-semibold text-center text-yellow-600">
          What our students say?
        </h1>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={15000}
          arrows={false}
          showDots={true}
          // customTransition="transform 10000ms  ease-in-out"
          // transitionDuration={10000}
          // partialVisbile={false}
          // customRightArrow={<CustomRightArrow />}
          // customLeftArrow={<CustomLeftArrow />}
          // removeArrowOnDeviceType="mobile"
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
