import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PeopleDetail = () => {
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
              <Image src={"/fplace.jpeg"} alt="" fill className="rounded-md" />
            </div>

            <div className="flex flex-col justify-start h-full mt-24 space-y-2 ">
              <h1 className="text-3xl font-babas text-indigo-950">
                Dr. Anika Patels
              </h1>
              <p className="text-base">Professor</p>
              <p>Department of Physiotherapy</p>
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
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Research Interest
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              Dr. Anika Patels research interests revolve around the
              intersection of health sciences and technology. She is
              particularly interested in exploring how innovative technological
              solutions can enhance healthcare delivery and patient outcomes.
              Her research focuses on areas such as telehealth, wearable
              devices, electronic health records, and health informatics.
              Through her research, Dr. Patel aims to contribute to the
              advancement of healthcare practices and improve the overall
              quality of patient care.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Working Experience
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Research & Publications
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="hover:no-underline ">
            <AccordionTrigger className="px-4 text-white hover:no-underline bg-gradient-to-tr from-indigo-700 to-indigo-950">
              Personal Interest
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm font-medium leading-loose text-neutral-600">
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PeopleDetail;
