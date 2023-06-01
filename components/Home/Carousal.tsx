"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImageButton from "../ImageButton";

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
            arrows={false}
            showDots={false}
            customButtonGroup={<ImageButton />}
            renderButtonGroupOutside={true}
          >
            {carousalImages.map((image: any, index: any) => (
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
                <p className="absolute right-0 z-50 -bottom-10 text-neutral-500">
                  <span className="text-base text-blue-950 font-babas">
                    {index + 1}
                  </span>{" "}
                  out of{" "}
                  <span className="text-base text-blue-950 font-babas">
                    {carousalImages.length}
                  </span>{" "}
                  images
                </p>
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
