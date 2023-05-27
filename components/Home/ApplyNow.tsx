import Image from "next/image";
import Link from "next/link";

const ApplyNow = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto px-5 py-20 overflow-hidden bg-gray-50 lg:px-0">
      <h1 className="text-3xl font-medium tracking-wide text-indigo-950">
        Get the Support You Need for the career You Want
      </h1>
      <div className="flex flex-col justify-between w-full mx-auto mt-20 space-y-14 lg:space-y-0 lg:space-x-20 lg:max-w-7xl lg:flex-row">
        <div className="flex flex-col w-full lg:max-w-3xl">
          <h1 className="text-sm font-light leading-relaxed text-justify lg:text-base text-neutral-600">
            Pratiksha Institute of Allied Health Sciences is offering Masters,
            Bachelor and Diploma courses in the field of Hospital Administration
            , Medical Laboratory Technology , Physiotherapy , Radiography and
            Imaging as well as in ICU and Emergency Technology . The course and
            curriculum is designed to allow students the opportunity to become
            self directed generalist and industry ready who will be able to
            function in a variety of settings.
          </h1>
          <Link href="/">
            <div className="rounded-md w-fit  px-3.5 py-2 m-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-950  ">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-950 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-base font-medium transition duration-300 text-blue-950 group-hover:text-white ease">
                Click here to apply
              </span>
            </div>
          </Link>
        </div>
        <div className="relative">
          <div className="h-64 w-96 bg-blue-950">
            <Image
              src="/apply.jpeg"
              alt=""
              width={400}
              height={600}
              className="absolute -top-10 rounded-tl-[80px] left-3"
            />
            <h1 className="absolute z-20 px-2 py-1 tracking-wide bg-yellow-400 rounded-md shadow-md cursor-pointer hover:bg-yellow-500 text-neutral-600 bottom-4 -left-2 w-fit">
              Download Brochure
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
