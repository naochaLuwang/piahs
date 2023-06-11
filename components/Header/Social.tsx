"use client";
import { FaFacebookF } from "react-icons/fa";

import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import { HiMail } from "react-icons/hi";
import Link from "next/link";
import { BsFillPhoneFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Social = () => {
  const pathname = usePathname();
  return (
    <div
      className={` items-center hidden lg:flex justify-between w-full h-12 px-10 py-1 bg-gradient-to-r from-indigo-800 to-indigo-950 ${
        pathname == "/" ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <div className="px-1 py-1 transition-all duration-100 ease-in-out bg-white rounded-full w-fit h-fit hover:bg-yellow-500 hover:bg-opacity-90">
            <FaFacebookF className="w-6 h-6 text-indigo-950" />
          </div>
        </Link>

        <div className="px-1 py-1 transition-all duration-100 ease-in-out bg-white rounded-full w-fit h-fit hover:bg-yellow-500 hover:bg-opacity-90">
          <AiFillInstagram className="w-6 h-6 text-indigo-950" />
        </div>
        <div className="px-1 py-1 transition-all duration-100 ease-in-out bg-white rounded-full w-fit h-fit hover:bg-yellow-500 hover:bg-opacity-90">
          <AiOutlineTwitter className="w-6 h-6 text-indigo-950" />
        </div>
        <div className="px-1 py-1 transition-all duration-100 ease-in-out bg-white rounded-full w-fit h-fit hover:bg-yellow-500 hover:bg-opacity-90">
          <AiFillLinkedin className="w-6 h-6 text-indigo-950" />
        </div>
        <div className="px-1 py-1 transition-all duration-100 ease-in-out bg-white rounded-full w-fit h-fit hover:bg-yellow-500 hover:bg-opacity-90">
          <AiFillYoutube className="w-6 h-6 text-indigo-950" />
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2">
          <HiMail className="w-6 h-6 text-white" />
          <Link href={`mailto:pratikshaiahs@gmail.com`}>
            <p className="text-sm text-white">pratikshaiahs@gmail.com</p>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillPhoneFill className="w-6 h-6 text-white" />

          <p className="text-sm text-white">90851-22 222</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
