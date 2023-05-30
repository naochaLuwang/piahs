// "use client";
// import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/tabs";
import Programmes from "../../components/programmes/Programmes";
import { getAllProgrammes } from "../actions/getAllProgrammes";
import { getProgrammes } from "../actions/getProgrammes";

const CoursePage = async () => {
  // const [programmes, setProgrammes] = useState([]);
  // const [degreeProgrammes, setDegreeProgrammes] = useState([]);
  // const [diplomaProgrammes, setDiplomaProgrammes] = useState([]);
  // const programmes = await getAllProgrammes();
  // const degreeProgrammes = await getProgrammes("degree");
  // const diplomaProgrammes = await getProgrammes("diploma");

  // useEffect(() => {
  //   fetch(`/api/programme`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProgrammes(data);
  //     });
  //   fetch(`/api/programme/degree`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDegreeProgrammes(data);
  //     });
  //   fetch(`/api/programme/diploma`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDiplomaProgrammes(data);
  //     });
  // }, []);

  // console.log(programmes);

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
            <TabsTrigger value="all" className="text-blue-800 cursor-pointer">
              All Programmes
            </TabsTrigger>
            <TabsTrigger
              value="degree"
              className="text-blue-800 cursor-pointer"
            >
              Degree Programmes
            </TabsTrigger>
            <TabsTrigger
              value="diploma"
              className="text-blue-800 cursor-pointer"
            >
              Diploma Programmes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="w-full px-0 mt-5 sm:px-7">
            {/* <Programmes degrees={programmes} /> */}
          </TabsContent>
          <TabsContent value="degree" className="w-full px-4 mt-5 sm:px-7">
            {/* <Programmes degrees={degreeProgrammes} /> */}
          </TabsContent>
          <TabsContent value="diploma" className="w-full px-4 mt-5 sm:px-7">
            {/* <Programmes degrees={diplomaProgrammes} /> */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursePage;
