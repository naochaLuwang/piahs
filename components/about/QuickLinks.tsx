import { MdLink } from "react-icons/md";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="flex flex-col h-auto shadow-lg rounded-xl w-96">
      <h1 className="w-full px-4 py-4 text-lg font-medium text-yellow-500 bg-blue-950 rounded-t-md">
        Quick Links
      </h1>
      <div className="flex flex-col w-full h-auto pt-5 pb-10 space-y-4 font-medium bg-gray-100">
        <Link
          href="http://apply.pratiksha-edu.in/login-user-start?key=9/sWIR83IeQVFPVMtnG+Pg==&sessionID=468d6d5c-24bb-4c37-a96b-ddf28a0b01ce"
          target="_blank"
          className="flex items-center px-3 space-x-2 border-0 border-b-2"
        >
          <MdLink className="w-6 h-6" />
          <h1 className="text-sm">Apply online</h1>
        </Link>
        <Link
          href="/courses"
          className="flex items-center px-3 space-x-2 border-0 border-b-2"
        >
          <MdLink className="w-6 h-6" />
          <h1 className="text-sm">Courses Offered</h1>
        </Link>
        <Link
          href="/"
          className="flex items-center px-3 space-x-2 border-0 border-b-2"
        >
          <MdLink className="w-6 h-6" />
          <h1 className="text-sm">Admission Office</h1>
        </Link>
        <Link
          href="/"
          className="flex items-center px-3 space-x-2 border-0 border-b-2"
        >
          <MdLink className="w-6 h-6" />
          <h1 className="text-sm">Advance Book your Seat</h1>
        </Link>
        <Link href="/contact" className="flex items-center px-3 space-x-2 ">
          <MdLink className="w-6 h-6" />
          <h1 className="text-sm">Contact Us</h1>
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
