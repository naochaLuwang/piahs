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

const DegreeCarousel = ({ degrees }: any) => {
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
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={4000}
          partialVisbile={false}
          arrows={false}
          showDots={false}
        >
          {degrees.map((degree: any) => (
            <div
              key={degree.title}
              className="flex flex-col items-center mr-2 bg-white border shadow-xl rounded-3xl h-96 w-72"
            >
              <Link href={degree.slug}>
                <div className="relative w-72 h-80 rounded-t-2xl">
                  <Image
                    src={degree.url}
                    alt={degree.title}
                    fill
                    className="rounded-t-2xl"
                    style={{ objectFit: "fill" }}
                    priority={true}
                  />
                </div>

                <div className="flex flex-col items-center justify-center w-full h-16 bg-blue-900 rounded-b-2xl">
                  <h1 className="text-sm font-medium text-center text-yellow-500">
                    {degree.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid w-full grid-cols-4 h-80">
          <Skeleton className="w-72 h-80" />
          <Skeleton className="w-72 h-80" />
          <Skeleton className="w-72 h-80" />
          <Skeleton className="w-72 h-80" />
        </div>
      )}
    </>
  );
};

export default DegreeCarousel;
