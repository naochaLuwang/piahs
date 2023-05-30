"use client";
import Link from "next/link";
import Logo from "./Logo";
import OrgName from "./OrgName";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [isSticky, setIsSticky] = useState(false);

  const pathName = usePathname();
  console.log(pathName);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`z-50 items-center hidden w-full px-10 shadow-sm lg:flex h-28 ${
        !isSticky && pathName === "/"
          ? "fixed top-12 transition-all duration-300 ease-in-out"
          : "fixed top-0 "
      } ${pathName === "/" && !isSticky ? "bg-transparent" : "bg-indigo-950"}`}
    >
      <div className="flex flex-2">
        <Logo imageUrl="/PIAHS_logon.png" />
        <OrgName
          orgName="PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE"
          orgSub="(Under Pratiksha Educational Trust)"
        />
      </div>
      <div className="relative flex flex-col items-end flex-1 w-full">
        <div className="relative h-20 w-96">
          <Image
            src="/content/site/PIAHS_APPROVED2.png"
            alt="approved by"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex pr-4 space-x-2">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <h1 className="pr-2 text-sm text-white border-2 border-transparent hover:font-medium hover:text-yellow-500 border-r-white">
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
