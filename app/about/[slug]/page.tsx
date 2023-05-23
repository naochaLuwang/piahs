import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { getAllLinks } from "@/app/actions/getAllLinks";
import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Dynamic page",
};

// export async function generateStaticParams() {
//   const links = await getAllLinks();

//   return links.map((link: any) => ({
//     slug: link.slug,
//   }));
// }

const DynamicPage = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  // @ts-ignore
  return (
    <div className="flex flex-col w-full h-auto max-w-5xl ">
      <BreadCrumb home={"Home"} link={"About Us"} sublink={sublink[0]?.title} />
      <h1 className="mt-5 text-2xl font-medium tracking-wider text-blue-800">
        {sublink[0]?.title}
      </h1>
    </div>
  );
};

export default DynamicPage;
