"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 space-y-2 bg-indigo-950 h-72 lg:h-auto lg:px-0">
      <Slide direction="up" triggerOnce>
        <h1 className="text-base font-semibold tracking-wide text-center text-white lg:text-3xl">
          {title}
        </h1>
      </Slide>
      <Slide className="w-full h-auto" direction="right" triggerOnce>
        <div className="relative w-full h-32">
          <Image
            src="/content/site/PIAHS_APPROVED2.png"
            alt="approved"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Slide>
    </div>
  );
};

export default Banner;
