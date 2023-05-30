import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/tabs";
import Programmes from "../../components/programmes/Programmes";

const degreeCarousel: any = [
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

const CoursePage = () => {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="flex flex-col items-center">
        <h1 className="max-w-lg text-3xl font-babas text-indigo-950">
          Programmes offered at
        </h1>
        <h1 className="mt-2 text-3xl font-babas text-indigo-950">
          Pratiksha Institute of Allied Health Science
        </h1>
      </div>
      <div className="w-full mt-10">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all" className="text-blue-900 cursor-pointer">
              All Programmes
            </TabsTrigger>
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
          <TabsContent value="all" className="w-full px-0 mt-5 sm:px-7">
            <Programmes degrees={degreeCarousel} />
          </TabsContent>
          <TabsContent value="degree" className="w-full px-4 mt-5 sm:px-7">
            <Programmes degrees={degreeCarousel} />
          </TabsContent>
          <TabsContent value="diploma" className="w-full px-4 mt-5 sm:px-7">
            <Programmes degrees={degreeCarousel} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursePage;
