import React from "react";

import Hero from "@/components/Home/Hero";

import Banner from "@/components/Home/Banner";
import ApplyNow from "@/components/Home/ApplyNow";
import Programme from "@/components/Home/Programme";
import Facilities from "@/components/Home/Facilities";

import NewsEvents from "@/components/Home/NewsEvents";

import Testimonial from "@/components/Home/Testimonial";

import HeroPage from "@/components/HeroPage";

export const metadata = {
  title: "PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE",
};

const carousalimages = [
  {
    title: "slide 1",
    url: "/slide1.jpeg",
  },
  {
    title: "Slide 2",
    url: "/slide2.jpeg",
  },
  {
    title: "Slide 3",
    url: "/slide3.jpeg",
  },
];

const HomePage = async () => {
  return (
    <main className="overflow-hidden">
      {/* <HomeCarousal carousalImages={carousalimages} /> */}

      <HeroPage />
      <Hero />
      <Banner title="Pratiksha Institute of Allied Health Sciences is" />
      <ApplyNow />
      <Programme />

      <Facilities />
      <NewsEvents />
      <Testimonial />
      {/* <StudentTestimonial /> */}
    </main>
  );
};

export default HomePage;
