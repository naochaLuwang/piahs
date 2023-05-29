import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import { getLink } from "@/app/actions/getLinks";
import MyEditor from "@/components/Editor";

export const metadata = {
  title: "Dynamic page",
};

const AdmissionDynamicPage = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  // @ts-ignore
  return (
    <div className="flex flex-col w-full h-auto ">
      <BreadCrumb
        home={"Home"}
        link={"Admission"}
        sublink={sublink[0]?.title}
      />
      <h1 className="mt-5 text-2xl font-medium tracking-wider text-blue-800">
        {sublink[0]?.title}
      </h1>
      <MyEditor content={sublink[0]?.content} />
    </div>
  );
};

export default AdmissionDynamicPage;
