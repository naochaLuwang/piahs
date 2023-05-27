import Image from "next/image";
import React from "react";

interface FacilityProps {
  icon: string;
  title: string;
}

const facilities: FacilityProps[] = [
  {
    icon: "/library1.png",
    title: "Library with plenty of Books",
  },
  {
    icon: "/laboratory1.png",
    title: "World class Laboratories",
  },
  {
    icon: "/hostel1.png",
    title: "Hostel Facility",
  },
  {
    icon: "/scholarship1.png",
    title: "Scholarship for deserving students",
  },
  {
    icon: "/sports1.png",
    title: "Sports & Game facility",
  },
  {
    icon: "/classroom1.png",
    title: "World class Classroom",
  },
];

const Facilities = () => {
  return (
    <div className="w-full h-auto px-10 py-20 bg-indigo-950 lg:px-0">
      <h1 className="text-2xl font-semibold tracking-wider text-center text-white">
        Our Facilities
      </h1>
      <p className="mt-5 text-sm text-center text-white">
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
            <h1 className="text-center text-white">{facility.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
