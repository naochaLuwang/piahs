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

export async function generateStaticParams() {
  const response = await fetch(`${process.env.API_URL}/api/sublink/courses`);

  const courses = await response.json();
  console.log(courses);

  return courses.map((course: Programme) => ({
    slug: course.slug,
  }));
  // return console.log()
}

const CoursesDynamic = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);
  // const response = await fetch(`${process.env.API_URL}/api/sublink/courses`);
  // const links = await response.json();

  // console.log(links);

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

export default CoursesDynamic;

export const revalidate = 0;
