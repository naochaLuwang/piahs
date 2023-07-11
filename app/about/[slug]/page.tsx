import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import MyEditor from "@/components/Editor";
import Contact from "@/components/about/Contact";
import QuickLinks from "@/components/about/QuickLinks";
import ImportantLinks from "@/components/about/ImportantLinks";
import { Metadata } from "next";
import client from "@/lib/prismadb";
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const about = await fetch(`${process.env.API_URL}/api/sublinks/${slug}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${about[0].title}| PIAHS`,
  };
}

export async function generateStaticParams() {
  // const response = await fetch(`${process.env.API_URL}/api/sublink/about`);

  const response = await client.sublinks.findMany({
    where: {
      slug: "about",
    },
  });

  return response.map((course: any) => ({
    slug: course.slug,
  }));
}

const DynamicPage = async ({ params }: any) => {
  const sublink = await client.sublinks.findMany({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div className="flex flex-col w-full px-4 md:flex-row xl:px-10 lg:px-6">
      <div className="flex flex-col w-full h-auto ">
        <BreadCrumb home={"Home"} link={"About"} sublink={sublink[0]?.title} />
        <h1 className="mt-5 ml-2 text-2xl font-medium tracking-wider text-blue-800 lg:ml-0">
          {sublink[0]?.title}
        </h1>
        <div className="w-full md:max-w-lg lg:max-w-full">
          <MyEditor content={sublink[0]?.content} />
        </div>
      </div>

      <div className="flex flex-col md:w-1/3 ">
        <div className="flex items-center justify-center w-full lg:justify-end">
          <div className="px-4 md:px-8 lg:px-0">
            <Contact />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start lg:justify-end">
          <div className="px-4 mt-5 md:px-8 lg:px-0">
            <QuickLinks />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start lg:justify-end">
          <div className="px-4 mt-5 md:px-8 lg:px-0">
            <ImportantLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
