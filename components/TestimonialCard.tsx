import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import React from "react";

interface TestiProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestiProps> = ({ testimonial }) => {
  return (
    <div className="relative w-full mb-10 h-96">
      <div className="flex space-x-2">
        <div className="flex flex-col w-40 py-5 mr-2 lg:w-56">
          <FaQuoteLeft className="text-2xl text-neutral-500" />
          <p className="mt-2 text-xs font-medium tracking-wide text-justify lg:text-sm">
            {testimonial.testimony}
          </p>
          <div className="absolute flex flex-col border-0 border-t-2 border-blue-400 bottom-5">
            <h1 className="text-base font-medium text-blue-500">
              {testimonial.name}
            </h1>
            <p className="text-sm text-neutral-600">{testimonial.sub}</p>
          </div>
        </div>
        <div className="relative h-56 mt-3 ml-2 bg-blue-300 rounded-md w-44">
          <div className="absolute top-1 right-1">
            <div className="relative h-56 w-44">
              <Image
                src={testimonial.imageUrl}
                alt="profile"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
