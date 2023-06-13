import Image from "next/image";
import Link from "next/link";
import React from "react";

const PeoplePage = () => {
  return (
    <div className="w-full h-screen py-10 mx-auto max-w-7xl">
      <h1 className="text-3xl font-semibold tracking-wide font-oswald text-indigo-950">
        Our Faculties
      </h1>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[30rem] bg-white border shadow-sm"
          >
            <div className="relative w-full h-60">
              <Image src="/fplace.jpeg" alt="Faculty image" fill />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-auto py-10">
              <h1 className="text-2xl font-medium text-indigo-950">
                Dr. Anika Patel
              </h1>
              <p className="mt-2 mb-10 text-base text-neutral-800">Professor</p>

              <Link href={`/people/abc`}>
                <div className="rounded-md px-3.5 py-2 m-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-950 text-indigo-950 w-fit ">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-base font-medium transition duration-300 text-indigo-950 group-hover:text-white ease">
                    View Profile
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
