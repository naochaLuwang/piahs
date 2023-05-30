import { Metadata } from "next";

import BreadCrumb from "@/components/BreadCrumb";
import { getSubLink } from "@/app/actions/getSublink";

import MyEditor from "@/components/Editor";
import Contact from "@/components/about/Contact";
import QuickLinks from "@/components/about/QuickLinks";
import ImportantLinks from "@/components/about/ImportantLinks";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const course = await fetch(
    `${process.env.API_URL}/api/sublinks/${slug}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${course[0].subtitle}| PIAHS`,
  };
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.API_URL}/api/sublink/courses`);

  const courses = await response.json();

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
