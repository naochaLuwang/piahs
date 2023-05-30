import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import DegreeCarousel from "./DegreeCarousel";

interface Degree {
  title: string;
  slug: string;
  programme: string;
  duration: number;
  url: string;
}

const degreeCarousel: Degree[] = [
  {
    title: "Bachelor of Medical Radiographic Technology (BMRT)",
    slug: "/courses/bmrt",
    programme: "Degree",
    duration: 3,
    url: "/brt.jpeg",
  },
  {
    title: "Bachelor of Medical Laboratory Technician (BMLT)",
    slug: "/courses/bmrt",
    programme: "Degree",
    duration: 3,
    url: "/blt.jpeg",
  },
  {
    title: "Bachelor of Physiotherapy (BPT)",
    slug: "/courses/bpt",
    programme: "Degree",
    duration: 3,
    url: "/physio1.webp",
  },
  {
    title: "Lateral Entry - Bachelor of Physiotherapy",
    slug: "/courses/bpt_lateral",
    programme: "Degree",
    duration: 3,
    url: "/physio2.jpeg",
  },
];

const diplomaCarousel: Degree[] = [
  {
    title: "Diploma of Medical Radiographic Technology (DMRT)",
    slug: "/courses/dmrt",
    programme: "Degree",
    duration: 3,
    url: "/brt.jpeg",
  },
  {
    title: "Diploma of Medical Laboratory Technician (DMLT)",
    slug: "/hello",
    programme: "Degree",
    duration: 3,
    url: "/blt.jpeg",
  },
  {
    title: "Diploma of Physiotherapy (DPT)",
    slug: "/hello",
    programme: "Degree",
    duration: 3,
    url: "/physio1.webp",
  },
  {
    title: "Lateral Entry - Diploma of Physiotherapy",
    slug: "/hello",
    programme: "Degree",
    duration: 3,
    url: "/physio2.jpeg",
  },
];

const Programme: React.FC = () => {
  return (
    <div className="w-full h-auto px-4 py-20 bg-gray-50 lg:px-0">
      <h1 className="text-2xl font-semibold text-center text-blue-900">
        FIND THE RIGHT PROGRAMME FOR YOU
      </h1>

      <div className="mx-auto mt-10 max-w-7xl">
        <Tabs defaultValue="degree" className="w-full">
          <TabsList>
            <TabsTrigger
              value="degree"
              className="text-yellow-500 cursor-pointer"
            >
              Degree Programmes
            </TabsTrigger>
            <TabsTrigger
              value="diploma"
              className="text-yellow-500 cursor-pointer"
            >
              Diploma Programmes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="degree" className="w-full px-4 mt-5 sm:px-7">
            <DegreeCarousel degrees={degreeCarousel} />
          </TabsContent>
          <TabsContent value="diploma" className="w-full px-4 mt-5 sm:px-7">
            <DegreeCarousel degrees={diplomaCarousel} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Programme;
