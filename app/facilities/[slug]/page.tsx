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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
  const response = await fetch(`${process.env.API_URL}/api/sublink/facilities`);

  const facilities = await response.json();

  return facilities.map((facility: any) => ({
    slug: facility.slug,
  }));
}

const FacilityDynamic = async ({ params }: any) => {
  const sublink: any = await getSubLink(params.slug);

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="flex flex-col h-auto px-4 md:w-2/3 md:px-0 lg:w-full">
        <BreadCrumb
          home={"Home"}
          link={"Facilities"}
          sublink={sublink[0]?.title}
        />
        <h1 className="mt-5 text-2xl font-medium tracking-wider text-blue-800">
          {sublink[0]?.title}
        </h1>
        <div className="w-full">
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

export default FacilityDynamic;