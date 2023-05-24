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

const HomeCarousal = ({ carousalImages }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      {!loading ? (
        <div className="relative w-full">
          <div className="absolute z-20 w-full text-center top-20">
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-3xl font-bold tracking-wide text-white">
                WELCOME TO PIAHS
              </h1>
              <div className="flex space-x-2">
                <Link href="/">
                  <p className="px-2 py-1 text-lg font-medium bg-yellow-400 rounded-md hover:bg-yellow-500 text-neutral-800 w-fit">
                    Online Admission
                  </p>
                </Link>
                <Link href="/">
                  <p className="px-2 py-1 text-lg font-medium bg-white rounded-md w-fit">
                    View Courses
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            rewindWithAnimation={true}
            autoPlaySpeed={10000}
            arrows={true}
            showDots={true}
            // customTransition="transform 3000 ease-in-out"
            // transitionDuration={3000}
            // partialVisbile={true}
            //   customLeftArrow={<CustomLeftArrow />}
            //   customRightArrow={<CustomRightArrow />}
          >
            {carousalImages.map((image: any) => (
              <div
                key={image.title}
                className="relative w-full lg:h-[82vh] h-96 lg:mt-10"
              >
                <Image
                  src={image.url}
                  fill
                  alt="banner Image"
                  priority={true}
                  style={{ objectFit: "fill" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <Skeleton className="w-full h-[80vh]" />
      )}
    </>
  );
};

export default HomeCarousal;
