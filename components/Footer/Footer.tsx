import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={"w-full lg:h-96 h-auto bg-blue-950  py-10"}>
      <div className={"grid lg:grid-cols-4 grid-cols-2 w-full gap-6 px-10 "}>
        <div className={"flex flex-col col-span-2"}>
          <h1 className={"text-yellow-500 tracking-wide text-lg font-semibold"}>
            PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE
          </h1>
          <p className="mt-2 text-sm text-yellow-500">
            (Under Pratiksha Educational Trust)
          </p>
          <p className="mt-2 text-sm text-yellow-500">
            Chandrapur Road, Panikhaiti, Guwahati-26
          </p>
          <p className="mt-2 text-sm text-yellow-500">Assam, 781028</p>
          <p className="mt-2 text-sm text-yellow-500">
            Email: pratikshaiahs@gmail.com
          </p>
          <p className="mt-2 text-sm text-yellow-500">Contact: 9085122222</p>
        </div>

        <div className="flex flex-col">
          <h1 className={"text-yellow-500 tracking-wide text-lg font-semibold"}>
            Quick Links
          </h1>
          <p className="mt-2 text-sm text-yellow-500">About PIAHS</p>
          <p className="mt-2 text-sm text-yellow-500">Courses Offered</p>
          <p className="mt-2 text-sm text-yellow-500">
            Admission Eligibility Criteria
          </p>
          <p className="mt-2 text-sm text-yellow-500">Contact Us</p>
        </div>
        <div className="flex flex-col">
          <h1 className={"text-yellow-500 tracking-wide text-lg font-semibold"}>
            Our Groups
          </h1>
          <p className="mt-2 text-sm text-yellow-500">
            Pratiksha Hospital Pvt. Limited
          </p>
          <p className="mt-2 text-sm text-yellow-500">
            Pratiksha College of Nursing
          </p>
          <p className="mt-2 text-sm text-yellow-500">
            Pratiksha School of Nursing
          </p>
          <p className="mt-2 text-sm text-yellow-500">
            Pratiksha Institute of Pharmaceutical Sciences
          </p>

          <div className="flex flex-col mt-5">
            <h1 className="text-lg text-white">Follow Us On</h1>
            <div className="flex items-center mt-2 space-x-2 text-yellow-500">
              <FaFacebookSquare className="text-3xl" />
              <RiInstagramFill className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 px-10 mt-10 ">
        <div className="flex items-center justify-start w-full h-full">
          <h1 className="text-sm text-white">
            Copyright &copy; 2023{" "}
            <Link href="/" className="text-yellow-500">
              PIAHS.
            </Link>{" "}
            Designed by{" "}
            <Link
              href="https://relyhealthtech.com"
              target="_blank"
              className="text-yellow-500"
            >
              Rely Healthcare Technologies
            </Link>{" "}
            . All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
