import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import { getAllSubLinks } from "@/app/actions/getAllSubLink";

export const metadata = {
  title: "Dynamic page",
};

// export async function generateStaticParams() {
//   const links = await getAllSubLinks();

//   console.log(links);

//   return links.map((link: any) => ({
//     slug: link.slug,
//   }));
// }

const DynamicPage = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  // @ts-ignore
  return (
    <div className="flex flex-col w-full h-auto max-w-5xl ">
      <BreadCrumb
        home={"Home"}
        link={"Course"}
        sublink={sublink[0]?.subtitle}
      />
      <h1 className="mt-5 text-2xl font-medium tracking-wider text-blue-800">
        {sublink[0]?.title}
      </h1>
    </div>
  );
};

export default DynamicPage;
