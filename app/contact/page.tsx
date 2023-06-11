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
    <div className="w-full h-auto py-20 mt-20 lg:mt-40">
      <h1 className="text-3xl tracking-wider text-center lg:text-4xl font-babas">
        Contact Us
      </h1>
      <div
        ref={containerRef}
        className="grid gap-6 px-4 mt-10 md:grid-cols-3 md:px-10"
      >
        <div className="flex flex-col items-center px-4 py-10 bg-blue-950 rounded-xl shadow-md md:h-[27rem]">
          <Image
            src="/campus.png"
            alt="campus"
            width={100}
            height={100}
            className="hidden lg:block"
          />
          <Image
            src="/campus.png"
            alt="campus"
            width={60}
            height={60}
            className="block lg:hidden"
          />
          <h1 className="mt-5 text-2xl text-white lg:text-3xl font-babas">
            Campus Location
          </h1>
          <div className="w-12 h-1 mt-3 bg-white"></div>
          <p className="mt-5 text-sm leading-relaxed text-center text-white lg:text-xl">
            Chandrapur Road, Near Central Training Institute, Panikhaiti,
            Guwahati, Assam, India. Pin – 781026.
          </p>
        </div>
        <div className="flex flex-col items-center px-4 py-10 bg-yellow-600 rounded-xl shadow-md md:h-[27rem]">
          <Image
            src="/phone.png"
            alt="phone"
            width={100}
            height={100}
            className="hidden lg:block"
          />
          <Image
            src="/phone.png"
            alt="phone"
            width={60}
            height={60}
            className="block lg:hidden"
          />
          <h1 className="mt-5 text-2xl text-white lg:text-3xl font-babas">
            Helpline
          </h1>
          <div className="w-12 h-1 mt-3 bg-white"></div>
          <div className="flex items-center mt-5 text-sm text-white lg:text-xl">
            <p>90851-22222</p>
          </div>
          <div className="flex items-center mt-3 text-sm text-white lg:text-xl">
            <p>+919287957187</p>
          </div>
          <div className="flex items-center mt-3 text-sm text-white lg:text-xl">
            <p>pratikshaiahs@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 py-10 bg-blue-950 rounded-xl shadow-md md:h-[27rem]">
          <Image
            src="/office.png"
            alt="office"
            width={100}
            height={100}
            className="hidden lg:block"
          />
          <Image
            src="/office.png"
            alt="office"
            width={60}
            height={60}
            className="block lg:hidden"
          />
          <h1 className="mt-5 text-2xl text-white lg:text-3xl font-babas">
            City Office
          </h1>
          <div className="w-12 h-1 mt-3 bg-white"></div>
          <p className="mt-5 text-sm leading-loose text-center text-white lg:text-xl">
            Pratiksha Hospital, Barbari, VIP road, Guwahati-781036.
          </p>
        </div>
      </div>
      <div className="w-full h-auto px-10 mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.56337274925!2d91.86343497568483!3d26.21087818989865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af7781c9883f7%3A0x887dad941ab03745!2sPratiksha%20Institute%20of%20Allied%20Health%20Sciences!5e0!3m2!1sen!2sin!4v1686492740996!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0px solid #07344e" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
