import NewsCard from "@/components/Home/NewsCard";
import React from "react";

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

const NewsEvents = () => {
  return (
    <div className="w-full min-h-screen py-10 mt-32">
      <div className="w-full mx-auto max-w-7xl">
        <h1 className="text-2xl font-medium text-center">News & Events</h1>
        <div className="grid w-full grid-cols-4 gap-3 mt-10">
          {news.map((item, index) => (
            <div key={index} className="w-full">
              <NewsCard title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
