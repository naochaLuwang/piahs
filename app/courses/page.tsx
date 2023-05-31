export const metadata = {
  title: "Programmes | PIAHS",
};

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
  const programmes = await getAllProgrammes();
  const degreeProgrammes = await getProgrammes("degree");
  const diplomaProgrammes = await getProgrammes("diploma");

  return (
    <div className="flex flex-col w-full py-16">
      <div className="flex flex-col items-center w-full">
        <h1 className="max-w-lg text-xl text-center lg:text-3xl font-babas text-indigo-950">
          Programmes offered at
        </h1>
        <h1 className="mt-2 text-xl text-center lg:text-3xl font-babas text-indigo-950">
          Pratiksha Institute of Allied Health Science
        </h1>
      </div>
      <div className="w-full mt-10">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap items-center justify-center w-full mb-20 ml-0 bg-white lg:ml-5 lg:bg-blue-50 lg:mb-0 lg:w-fit">
            <TabsTrigger
              value="all"
              className="w-full cursor-pointer text-neutral-500 sm:w-auto"
            >
              All Programmes
            </TabsTrigger>
            <TabsTrigger
              value="degree"
              className="w-full cursor-pointer text-neutral-500 sm:w-auto"
            >
              Degree Programmes
            </TabsTrigger>
            <TabsTrigger
              value="diploma"
              className="w-full cursor-pointer text-neutral-500 sm:w-auto"
            >
              Diploma Programmes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="w-full px-0 mt-5 sm:px-7">
            <Programmes degrees={programmes} />
          </TabsContent>
          <TabsContent value="degree" className="w-full px-4 mt-5 sm:px-7">
            <Programmes degrees={degreeProgrammes} />
          </TabsContent>
          <TabsContent value="diploma" className="w-full px-4 mt-5 sm:px-7">
            <Programmes degrees={diplomaProgrammes} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursePage;
