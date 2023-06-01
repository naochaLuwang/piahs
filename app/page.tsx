import React from "react";

import Banner from "@/components/Home/Banner";
import ApplyNow from "@/components/Home/ApplyNow";
import Programme from "@/components/Home/Programme";
import Facilities from "@/components/Home/Facilities";

import NewsEvents from "@/components/Home/NewsEvents";

import Testimonial from "@/components/Home/Testimonial";
import Whychooseus from "../components/Home/WhyChooseUs";

import HeroPage from "@/components/HeroPage";
import ScrollReveal from "../components/ScrollReveal";
import { getProgrammes } from "./actions/getProgrammes";
import { getAllTestimonials } from "./actions/getAllTestimonial";

export const metadata = {
  title: "PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE",
};

const HomePage = async () => {
  const degreeCarousel = await getProgrammes("degree");
  const diplomaCarousel = await getProgrammes("diploma");
  const testimonials = await getAllTestimonials();

  console.log(testimonials);

  return (
    <main className="overflow-hidden">
      <HeroPage />
      {/* <Hero /> */}
      <Whychooseus />

      <Banner title="Pratiksha Institute of Allied Health Sciences is" />

      <ApplyNow />
      <Programme
        degreeCarousel={degreeCarousel}
        diplomaCarousel={diplomaCarousel}
      />

      <Facilities />
      <NewsEvents />
      <Testimonial />
    </main>
  );
};

export default HomePage;
