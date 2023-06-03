"use client";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.from(containerRef.current.children as any, {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: Power3.easeOut,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-auto py-20 mt-40">
      <h1 className="text-4xl tracking-wider text-center font-babas">
        Contact Us
      </h1>
      <div
        ref={containerRef}
        className="grid gap-6 px-4 mt-10 md:grid-cols-3 md:px-10"
      >
        <div className="flex flex-col items-center px-4 py-10 bg-blue-950 rounded-xl shadow-md md:h-[27rem]">
          <Image src="/campus.png" alt="campus" width={100} height={100} />
          <h1 className="mt-5 text-3xl text-white font-babas">
            Campus Location
          </h1>
          <div className="w-12 h-1 mt-3 bg-white"></div>
          <p className="mt-5 text-xl leading-relaxed text-center text-white">
            Chandrapur Road, Near Central Training Institute, Panikhaiti,
            Guwahati, Assam, India. Pin – 781026.
          </p>
        </div>
        <div className="flex flex-col items-center px-4 py-10 bg-yellow-600 rounded-xl shadow-md md:h-[27rem]">
          <Image src="/phone.png" alt="phone" width={100} height={100} />
          <h1 className="mt-5 text-3xl text-white font-babas">Helpline</h1>
          <div className="w-12 h-1 mt-3 bg-white"></div>
          <div className="flex items-center mt-5 text-xl text-white">
            <p>90851-22222</p>
          </div>
          <div className="flex items-center mt-3 text-xl text-white">
            <p>+919287957187</p>
          </div>
          <div className="flex items-center mt-3 text-xl text-white">
            <p>pratikshaiahs@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 py-10 bg-blue-950 rounded-xl shadow-md md:h-[27rem]">
          <Image src="/office.png" alt="office" width={100} height={100} />
          <h1 className="mt-5 text-3xl text-white font-babas">City Office</h1>
          <div className="w-12 h-1 mt-3 bg-white"></div>
          <p className="mt-5 text-xl leading-loose text-center text-white">
            Pratiksha Hospital, Barbari, VIP road, Guwahati-781036.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
