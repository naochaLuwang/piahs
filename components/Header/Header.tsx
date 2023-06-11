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
    target: "_parent",
  },
  {
    name: "Online Apply",
    href: "http://apply.pratiksha-edu.in/login-user-start?key=9/sWIR83IeQVFPVMtnG+Pg==&sessionID=468d6d5c-24bb-4c37-a96b-ddf28a0b01ce",
    target: "_blank",
  },
  {
    name: "Get In touch",
    href: "/contact",
    target: "_parent",
  },
  {
    name: "Results",
    href: "/",
    target: "_parent",
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
      className={`z-50 items-center hidden w-full px-10 shadow-sm lg:flex h-32  py-8 ${
        !isSticky && pathName === "/"
          ? "fixed top-12 transition-all duration-300 ease-in-out"
          : "fixed top-0 "
      } ${
        pathName === "/" && !isSticky
          ? "bg-transparent"
          : "bg-gradient-to-tr from-indigo-900 to-indigo-950"
      }`}
    >
      <div className="flex flex-2">
        <Logo imageUrl="/PIAHS_logon.png" />
        <OrgName
          orgName="PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE"
          orgSub="(Under Pratiksha Educational Trust)"
        />
      </div>
      <div className="relative flex flex-col items-end flex-1 w-full">
        <div className="relative h-24 w-96">
          <Image
            src="/content/site/PIAHS_APPROVED2.png"
            alt="approved by"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex pb-2 pr-4 space-x-5 h-14">
          {links.map((link, index) => (
            <Link href={link.href} key={link.name} target={link.target}>
              <h1
                className={`pr-4 text-sm text-white ${
                  index === links.length - 1 ? "border-r-0" : "border-r-white"
                } border-2 border-transparent hover:font-medium hover:text-yellow-500`}
              >
                {link.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
