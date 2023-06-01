"use client";
import React from "react";
import { TbSquareChevronsRight, TbSquareChevronsLeft } from "react-icons/tb";

const ImageButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute right-0 flex items-center justify-end w-full mt-2 -top-14 carousel-button-group">
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

export default ImageButton;
