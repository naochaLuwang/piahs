import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import { getLink } from "@/app/actions/getLinks";
import MyEditor from "@/components/Editor";
import Contact from "@/components/about/Contact";
import QuickLinks from "@/components/about/QuickLinks";
import ImportantLinks from "@/components/about/ImportantLinks";

export const metadata = {
  title: "Dynamic page",
};

const AdmissionDynamicPage = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  // @ts-ignore
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full h-auto ">
        <BreadCrumb
          home={"Home"}
          link={"Courses"}
          sublink={sublink[0]?.subtitle}
        />
        <h1 className="mt-5 text-2xl font-medium tracking-wider text-blue-800">
          {sublink[0]?.title}
        </h1>
        <MyEditor content={sublink[0]?.content} />
      </div>

      <div className="flex flex-col space-y-5">
        <Contact />
        <QuickLinks />
        <ImportantLinks />
      </div>
    </div>
  );
};

export default AdmissionDynamicPage;
