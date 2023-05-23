"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
// import { Box, Text } from "@chakra-ui/react";
// import CustomRightArrow from "./CustomRightArrow";
// import CustomLeftArrow from "./CustomLeftArrow";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const StudentTestimonial = () => {
  return (
    <div className="w-full h-auto px-4 py-20 bg-[url('/slide1.jpeg')] bg-cover bg-opacity-20 ">
      <h1 className="mb-5 text-2xl font-bold text-center text-yellow-700">
        What our students say?
      </h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        rewindWithAnimation={true}
        autoPlaySpeed={15000}
        arrows={true}
        showDots={true}
        // customTransition="transform 10000ms  ease-in-out"
        // transitionDuration={10000}
        // partialVisbile={false}
        // customRightArrow={<CustomRightArrow />}
        // customLeftArrow={<CustomLeftArrow />}
        // removeArrowOnDeviceType="mobile"
      >
        <div className="lg:max-w-6xl mx-auto py-20  lg:h-72 h-[40rem]  bg-white bg-opacity-90 rounded-xl lg:rounded-xl lg:shadow-xl shadow-lg     space-y-5 lg:py-8 px-8 relative">
          <div className="flex flex-col">
            <div className="flex items-center space-x-10">
              <div className="flex flex-col">
                <div>
                  <div className="bg-blue-300 rounded-full w-44 h-44"></div>
                </div>
              </div>
              <div>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eget nibh ac quam congue dictum. Cras dignissim,
                  dui at sollicitudin dignissim, eros lectus venenatis nibh,
                  vitae auctor quam massa sed dui. Duis accumsan, eros rutrum
                  vehicula malesuada, lorem quam cursus mauris, non pellentesque
                  ex nulla ac erat.
                </h1>
              </div>
            </div>
            <div className="flex flex-col mt-5 ml-5">
              <h1>John Doe</h1>
              <p>B.Pharm 2nd Semester</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default StudentTestimonial;
