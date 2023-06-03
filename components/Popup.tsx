"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface PopupData {
  imageUrl: string;
  slug: string;
  timestamp: number;
}

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const hasVisitedHomepage = sessionStorage.getItem("visitedHomepage");

    if (pathName === "/" && !hasVisitedHomepage) {
      setShowPopup(true);
      localStorage.setItem("visitedHomepage", "true");
      document.body.classList.add("no-scroll");
    } else if (pathName === "/" && hasVisitedHomePage) {
      setShowPopup(false);
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [pathName]);

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("visitedHomepage");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-xl font-bold">
              Welcome to Pratiksha Insititute of allied health science
            </h1>
            <p className="text-gray-700">
              Thank you for visiting the homepage. Enjoy your stay!
            </p>
            <button
              className="px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
