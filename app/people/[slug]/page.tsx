import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaculty } from "@/app/actions/getFaculty";
import MyEditor from "@/components/Editor";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const faculty = await fetch(
    `${process.env.API_URL}/api/faculty/${slug}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${faculty.firstName} ${faculty.lastName}| PIAHS`,
  };
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.API_URL}/api/faculty`);

  const faculties = await response.json();

  return faculties.map((faculty: FacultyProps) => ({
    slug: faculty.slug,
  }));
}

const PeopleDetail = async ({ params }: any) => {
  const faculty: FacultyProps = await getFaculty(params.slug);

  return (
    <div className="w-full h-auto py-20">
      <div className="relative w-full h-56">
        <div
          className="absolute inset-0 bg-opacity-25"
          // style={{
          //   backgroundImage:
          //     'url("https://www.wallpaperuse.com/wallp/4-42005_m.jpg")',
          //   backgroundSize: "cover",
          //   backdropFilter: "blur(10px)",
          //   zIndex: "-1",
          // }}
        >
          <div className="flex items-center w-full h-full mx-auto space-x-5 max-w-7xl ">
            <div className="relative w-40 h-40 rounded-md">
              <Image
                src={faculty.profileUrl}
                alt=""
                fill
                className="rounded-md"
              />
            </div>

            <div className="flex flex-col justify-start h-full mt-24 space-y-2 ">
              <h1 className="text-3xl font-babas text-indigo-950">
                {`${faculty.firstName} ${faculty.lastName}`}
              </h1>
              <p className="text-base">{faculty.designation.designationName}</p>
              <p>Department of {faculty.department.departmentName}</p>
            </div>
          </div>
        </div>
        {/* Content of the div */}
      </div>
      <div className="w-full mx-auto mt-10 max-w-7xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Qualifications
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              <div className="pl-4">
                <MyEditor content={faculty.qualification} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Research Interest
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              <div className="pl-5">
                <MyEditor content={faculty.research} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Working Experience
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              <div className="pl-5">
                <MyEditor content={faculty.experience} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Research & Publications
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              <div className="pl-5">
                <MyEditor content={faculty.publications} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="hover:no-underline ">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Other Achievements
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              <div className="pl-5">
                <MyEditor content={faculty.achievements} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PeopleDetail;
