import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import DegreeCarousel from "./DegreeCarousel";

interface ProgrammeProps {
  degreeCarousel: Programme[];
  diplomaCarousel: Programme[];
}

const Programme: React.FC<ProgrammeProps> = ({
  degreeCarousel,
  diplomaCarousel,
}) => {
  return (
    <div className="w-full h-auto px-4 py-20 bg-gray-50 lg:px-0">
      <h1 className="text-2xl font-semibold text-center text-indigo-950">
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
