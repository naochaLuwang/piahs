import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllFaculty } from "../actions/getAllFaculty";

const PeoplePage = async () => {
  const faculties = await getAllFaculty();
  return (
    <div className="w-full h-screen px-8 py-10 lg:mx-auto lg:max-w-7xl lg:px-0">
      <h1 className="text-2xl font-semibold tracking-wide lg:text-3xl font-oswald text-indigo-950">
        Our Faculties
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-4">
        {faculties &&
          faculties.map((faculty: FacultyProps, index: any) => (
            <div
              key={index}
              className="w-full h-[30rem] bg-white border shadow-sm"
            >
              <div className="relative w-full h-60">
                <Image src="/fplace.jpeg" alt="Faculty image" fill />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-auto py-10">
                <h1 className="text-2xl font-medium text-indigo-950">
                  {`${faculty.firstName} ${faculty.lastName}`}
                </h1>
                <p className="mt-2 mb-10 text-base text-neutral-800">
                  {faculty.designation.designationName}
                </p>

                <Link href={`/people/${faculty.slug}`}>
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
