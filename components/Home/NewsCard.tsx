import Image from "next/image";
import React from "react";

interface NewsCardProps {
  imageUrl?: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="w-full relative mb-10  bg-white border rounded-lg shadow-md lg:mx-2 h-[27rem] sm:w-72">
      <div className="relative bg-white border h-44 w-72">
        <Image
          src="/PIAHS_logon.png"
          alt="news"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <h1 className="px-4 pt-2 text-base font-semibold text-blue-950 line-clamp-3">
        {title}
      </h1>

      <p className="px-4 mt-5 text-sm line-clamp-4 text-neutral-500">
        {description}
      </p>

      <div className="absolute bottom-0 w-full left-1">
        <div className="rounded-md  px-3.5 py-2 m-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-950 text-blue-950 w-fit">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-base font-medium transition duration-300 text-blue-950 group-hover:text-white ease">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
