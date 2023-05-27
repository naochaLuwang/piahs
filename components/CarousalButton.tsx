"use client";
import React from "react";
import { TbSquareChevronsRight, TbSquareChevronsLeft } from "react-icons/tb";

const CarousalButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="flex items-center justify-center w-full mt-2 carousel-button-group">
      <div
        className={currentSlide === 0 ? "disable" : "cursor-pointer"}
        onClick={() => previous()}
      >
        <TbSquareChevronsLeft className="w-12 h-12 text-indigo-950" />
      </div>
      <div onClick={() => next()} className="cursor-pointer">
        <TbSquareChevronsRight className="w-12 h-12 text-indigo-950" />
      </div>
    </div>
  );
};

export default CarousalButton;
