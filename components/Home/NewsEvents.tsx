"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import CarousalButton from "../CarousalButton";
import Link from "next/link";
import NewsCard from "./NewsCard";

const news = [
  {
    title:
      "Pratiksha Institute of Allied Health Science Launches New Diploma Program in Radiologic Technology",
    description:
      "We are thrilled to introduce our latest program offering at the Allied Health Science Institute – the Diploma in Radiologic Technology. This comprehensive program equips students with the knowledge and skills required to perform diagnostic imaging procedures using X-ray, CT scans, and other advanced imaging technologies. Graduates of this program will be prepared for rewarding careers as radiologic technologists, playing a vital role in healthcare diagnostics and patient care.",
  },
  {
    title:
      "Pratiksha Institute of Allied Health Science  Collaborates with Local Community Health Center to Provide Free Health Screenings",
    description:
      "The Allied Health Science Institute is proud to announce its partnership with [Community Health Center Name] to offer free health screenings to the community. As part of our commitment to public health, our faculty and students will be providing screenings for blood pressure, blood glucose, cholesterol levels, and BMI. This initiative aims to raise awareness about preventive healthcare and contribute to the well-being of our local community.",
  },
  {
    title:
      "Pratiksha Institute of Allied Health Science Allied Health Science Institute Receives Accreditation for its Medical Laboratory Technology Program",
    description:
      "The Allied Health Science Institute is proud to announce that its Medical Laboratory Technology program has been accredited by the National Accrediting Agency for Clinical Laboratory Sciences (NAACLS). This accreditation recognizes the high-quality education and training provided by the institute, ensuring that our graduates meet the industry standards and are well-prepared for successful careers in medical laboratory technology.",
  },
  {
    title:
      "Career Fair: Explore Exciting Opportunities in Allied Health Sciences",
    description:
      "The Allied Health Science Institute is hosting a career fair on [date] to connect students and graduates with potential employers and industry professionals. This event provides a unique opportunity to learn about various career paths in allied health sciences, interact with employers from hospitals, clinics, and research institutions, and explore job openings and internship opportunities. Don't miss this chance to network and discover exciting prospects in the field!",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const NewsEvent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className="w-full h-auto py-20 px-14 lg:px-28">
      <h1 className="mb-10 text-3xl font-semibold tracking-wide text-center text-indigo-950">
        News & Events
      </h1>
      {loading ? (
        <Skeleton className="w-full h-96" />
      ) : (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={4000}
          arrows={false}
          showDots={true}
          customButtonGroup={<CarousalButton />}
          renderButtonGroupOutside={true}
          containerClass="carousel-container"
        >
          {news.map((item, index) => (
            <div key={index}>
              <NewsCard title={item.title} description={item.description} />
            </div>
          ))}
        </Carousel>
      )}
      <div className="flex justify-center w-full mt-6">
        <Link href="/">
          <p className="px-6 py-3 m-1 text-lg font-medium text-white rounded-md cursor-pointer bg-indigo-950">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NewsEvent;
