"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";

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

const ImageCarousal = ({ carousalImages }: any) => {
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
        <div className="relative w-[50rem] ">
          <Carousel
            responsive={responsive}
            autoPlay={false}
            infinite={false}
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
                className="relative w-full lg:h-[60vh] h-96    mb-10"
              >
                <Image
                  src={image.imageUrl}
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

export default ImageCarousal;
