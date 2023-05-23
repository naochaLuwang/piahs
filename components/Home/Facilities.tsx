import Image from "next/image";
import React from "react";

interface FacilityProps {
  icon: string;
  title: string;
}

const facilities: FacilityProps[] = [
  {
    icon: "/libraries.png",
    title: "Library with plenty of Books",
  },
  {
    icon: "/laboratory.png",
    title: "World class Laboratories",
  },
  {
    icon: "/hostel.png",
    title: "Hostel Facility",
  },
  {
    icon: "/scholarship.png",
    title: "Scholarship for deserving students",
  },
  {
    icon: "/sports.png",
    title: "Sports & Game facility",
  },
  {
    icon: "/classroom.png",
    title: "World class Classroom",
  },
];

const Facilities = () => {
  return (
    <div className="w-full h-auto px-10 py-20 bg-blue-950 lg:px-0">
      <h1 className="text-2xl font-medium tracking-wider text-center text-yellow-500">
        Our Facilities
      </h1>
      <p className="mt-5 text-sm text-center text-yellow-300">
        Combining the best facilities and experienced faculty to provide you
        nothing short of the best
      </p>

      <div className="grid h-auto max-w-6xl grid-cols-1 mx-auto mt-10 lg:grid-cols-3 lg:h-96 gap-y-10">
        {facilities.map((facility) => (
          <div
            className="flex flex-col items-center space-y-2"
            key={facility.title}
          >
            <Image src={facility.icon} alt="library" width={100} height={100} />
            <h1 className="text-center text-yellow-400">{facility.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
