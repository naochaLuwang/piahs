import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import MyEditor from "@/components/Editor";
import Contact from "@/components/about/Contact";
import QuickLinks from "@/components/about/QuickLinks";
import ImportantLinks from "@/components/about/ImportantLinks";

export const metadata = {
  title: "Dynamic page",
};

const DynamicPage = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  // @ts-ignore
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="flex flex-col h-auto px-4 md:w-2/3 md:px-0">
        <BreadCrumb home={"Home"} link={"About"} sublink={sublink[0]?.title} />
        <h1 className="mt-5 text-2xl font-medium tracking-wider text-blue-800">
          {sublink[0]?.title}
        </h1>
        <div className="w-full">
          <MyEditor content={sublink[0]?.content} />
        </div>
      </div>

      <div className="flex flex-col px-4 md:w-1/3 md:px-0">
        <div className="flex items-center justify-center w-full md:justify-start">
          <div className="px-4 md:px-8">
            <Contact />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <div className="px-4 mt-5 md:px-8 ">
            <QuickLinks />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <div className="px-4 mt-5 md:px-8">
            <ImportantLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
