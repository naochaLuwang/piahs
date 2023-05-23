import Link from "next/link";
import Logo from "./Logo";
import OrgName from "./OrgName";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  {
    name: "News & Events",
    href: "/",
  },
  {
    name: "Online Apply",
    href: "/",
  },
  {
    name: "Get In touch",
    href: "/",
  },
  {
    name: "Results",
    href: "/",
  },
];

const Header = () => {
  return (
    <div className="fixed z-50 items-center hidden w-full px-10 bg-white shadow-sm lg:flex h-28">
      <div className="flex flex-2">
        <Logo imageUrl="/PIAHS_logo.png" />
        <OrgName
          orgName="PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE"
          orgSub="(Under Pratiksha Educational Trust)"
        />
      </div>
      <div className="relative flex flex-col items-end flex-1 w-full">
        <div className="relative h-20 w-96">
          <Image
            src="/content/site/PIAHS_APPROVED_BY.png"
            alt="approved by"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex pr-4 space-x-2">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <h1 className="pr-2 text-sm text-blue-600 border-2 border-white hover:font-medium hover:text-blue-700 border-r-blue-700">
                {link.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="absolute right-0 flex-1 bg-red-200">
        <div className="flex flex-col items-end py-2 ">
          
        </div>
      </div> */}
    </div>
  );
};

export default Header;
