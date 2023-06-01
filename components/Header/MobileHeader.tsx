"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { CSSProperties } from "react";
import { MotionStyle } from "framer-motion";

interface NavLink {
  id: string;
  title: string;
  slug: string;
  order: number;
  status: string;
  pageType: string;
  userId: string;
  content: string;
  isMulti: "YES" | "NO";
  createdAt: string;
  updatedAt: string;
  sublinks: Sublink[];
}

interface Sublink {
  id: string;
  linkId: string;
  userId: string;
  title: string;
  subtitle: string;
  slug: string;
  order: number;
  status: string;
  content: string;
  pageType: string;
  createdAt: string;
  updatedAt: string;
}

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<NavLink[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [openSublinks, setOpenSublinks] = useState<string[]>([]);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/links`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const toggleSublinks = (linkId: string) => {
    if (isOpenSublink(linkId)) {
      setOpenSublinks(openSublinks.filter((id) => id !== linkId));
    } else {
      setOpenSublinks([...openSublinks, linkId]);
    }
  };

  const isOpenSublink = (linkId: string) => {
    return openSublinks.includes(linkId);
  };

  const slidingComponentStyle: MotionStyle | CSSProperties = {
    position: "fixed",
    top: 130,
    right: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#1e1b4b",
    transition: "transform 0.3s ease-in-out",
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    overflowY: "auto",
    maxHeight: "100vh",
  };

  return (
    <div className="fixed top-0 z-50 flex flex-col w-full h-32 pt-3 overflow-hidden shadow-sm bg-indigo-950 lg:hidden">
      <div className="flex w-full px-2 space-x-3">
        <div className="relative flex-shrink-0 w-20 h-20 bg-white rounded-xl">
          <Image src="/PIAHS_logon.png" alt="logo" fill />
        </div>
        <div className="flex flex-col space-y-1">
          <h1 className="text-base font-[700] text-white font-babas">
            PRATIKSHA INSTITUTE OF
            <br /> ALLIED HEALTH SCIENCE
          </h1>
          <p className="text-xs text-white">
            (Under Pratiksha Educational Trust)
          </p>
        </div>
        <div className="">
          <div
            className={`px-4 py-2 font-semibold text-white rounded ${
              isOpen ? "open" : "closed"
            }`}
            onClick={toggleSlide}
          >
            {isOpen ? (
              <AiOutlineCloseSquare className="w-10 h-10 text-white" />
            ) : (
              <GiHamburgerMenu className="w-8 h-10 text-white" />
            )}
          </div>
          <motion.div
            style={slidingComponentStyle}
            initial={{ translateX: "100%" }}
            animate={{ translateX: isOpen ? "0%" : "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="px-4 py-2">
              <AnimatePresence>
                {data && (
                  <motion.ul>
                    {data.map((link) => (
                      <motion.li
                        key={link.id}
                        className="mt-5 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {link.sublinks && link.sublinks.length > 0 ? (
                          <div
                            onClick={() => toggleSublinks(link.id)}
                            className="text-sm font-semibold"
                          >
                            {isOpenSublink(link.id)
                              ? `${link.title}-`
                              : `${link.title}+`}
                          </div>
                        ) : (
                          <Link
                            href={link.slug}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.title}
                          </Link>
                        )}
                        <AnimatePresence>
                          {isOpenSublink(link.id) && (
                            <motion.ul
                              className="ml-4"
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                            >
                              {link.sublinks.map((sublink) => (
                                <motion.li
                                  key={sublink.id}
                                  className="mt-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <Link
                                    href={`${link.slug}/${sublink.slug}`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <p>{sublink.title}</p>
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-start px-2 py-2 mt-2 space-x-2 text-xs font-medium bg-yellow-500 text-neutral-700">
        <Link href="/">
          <h1 className="pr-1 border-0 border-r-2 border-blue-700">
            News & Events
          </h1>
        </Link>
        <Link href="/">
          <h1 className="pr-1 border-0 border-r-2 border-blue-700">
            Online Apply
          </h1>
        </Link>
        <Link href="/">
          <h1 className="pr-1 border-0 border-r-2 border-blue-700">
            Get in Touch
          </h1>
        </Link>
        <Link href="/">
          <h1>Results</h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
