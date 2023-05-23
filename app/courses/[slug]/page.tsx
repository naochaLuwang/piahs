import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import { getLink } from "@/app/actions/getLinks";

export const metadata = {
  title: "Dynamic page",
};

// export async function generateStaticParams() {
//   const links = await fetch(`http://127.0.0.1:3000/api/links/courses`).then(
//     (res) => res.json()
//   );

//   return links?.sublinks.map((link: any) => ({
//     slug: link.slug,
//   }));
// }

const DynamicPage = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);
  console.log(sublink);

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
