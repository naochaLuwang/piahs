import client from "@/lib/prismadb";
import Banner from "@/components/Home/Banner";
import ApplyNow from "@/components/Home/ApplyNow";
import Programme from "@/components/Home/Programme";
import Facilities from "@/components/Home/Facilities";
import NewsEvents from "@/components/Home/NewsEvents";
import Testimonial from "@/components/Home/Testimonial";
import Whychooseus from "@/components/Home/WhyChooseUs";
import HeroPage from "@/components/HeroPage";

// metadata component

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE",
};

const HomePage = async () => {
  const degreeCarousel = await client.programme.findMany({
    where: {
      programmeType: "degree",
    },
  });

  const diplomaCarousel = await client.programme.findMany({
    where: {
      programmeType: "diploma",
    },
  });

  // const testimonials = await getAllTestimonials();
  const testimonials = await client.testimonial.findMany();

  return (
    <main className="overflow-hidden">
      <HeroPage />
      <Whychooseus />
      <Banner title="Pratiksha Institute of Allied Health Sciences is" />
      <ApplyNow />
      <Programme
        degreeCarousel={degreeCarousel}
        diplomaCarousel={diplomaCarousel}
      />
      <Facilities />
      <NewsEvents />
      <Testimonial testimonials={testimonials} />
    </main>
  );
};

export default HomePage;

export const revalidate = 0;
