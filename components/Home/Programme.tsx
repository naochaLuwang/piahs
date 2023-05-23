import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import DegreeCarousel from "./DegreeCarousel";

const degreeCarousal = [
  {
    title: "Bachelor of Medical Radiographic Technology (BMRT)",
    slug: "/hello",
    url: "/brt.jpeg",
  },
  {
    title: "Bachelor of Medical Laboratory Technician (BMLT)",
    slug: "/hello",
    url: "/blt.jpeg",
  },
  {
    title: "Bachelor of Physiotherapy (BPT)",
    slug: "/hello",
    url: "/physio1.webp",
  },
  {
    title: "Lateral Entry - Bachelor of Physiotherapy",
    slug: "/hello",
    url: "/physio2.jpeg",
  },
];

const diplomaCarousal = [
  {
    title: "Diploma of Medical Radiographic Technology (DMRT)",
    slug: "/hello",
    url: "/brt.jpeg",
  },
  {
    title: "Diploma of Medical Laboratory Technician (DMLT)",
    slug: "/hello",
    url: "/blt.jpeg",
  },
  {
    title: "Diploma of Physiotherapy (DPT)",
    slug: "/hello",
    url: "/physio1.webp",
  },
  {
    title: "Lateral Entry - Diploma of Physiotherapy",
    slug: "/hello",
    url: "/physio2.jpeg",
  },
];

const Programme = () => {
  return (
    <div className="w-full h-auto px-4 py-20 bg-gray-50 lg:px-0">
      <h1 className="text-2xl font-semibold text-center text-blue-900">
        FIND THE RIGHT PROGRAMME FOR YOU
      </h1>

      <div className="mx-auto mt-10 max-w-7xl">
        <Tabs defaultValue="degree" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="degree" className="text-yellow-500">
              Degree Programmes
            </TabsTrigger>
            <TabsTrigger value="diploma" className="text-yellow-500">
              Diploma Programmes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="degree" className="w-[88vw] mt-5 px-7 ">
            <DegreeCarousel degrees={degreeCarousal} />
          </TabsContent>
          <TabsContent value="diploma" className="w-[88vw] mt-5 px-7">
            <DegreeCarousel degrees={diplomaCarousal} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Programme;
