import HeroCard from "../Home/HeroCard";
const heroDetails = [
  {
    title: "Quality Education",
    description:
      "Our top priority is providng quality education with integrity to its student population",
    icon: "icon4.png",
  },
  {
    title: "Best Location",
    description: "Our location is in a peaceful page far from the city buzz",
    icon: "icon3.png",
  },
  {
    title: "Small Size Classroom",
    description:
      "We limits the size of each class to 17 students maximizing student teachers interaction and promoting student centered learning",
    icon: "icon2.png",
  },
  {
    title: "Dedicated Teachers",
    description:
      "Our teachers spend countless hours preparing lessons to support your academic , cultural and professional growth.",
    icon: "icon1.png",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto py-20 bg-gray-50">
      <h1 className="mb-5 text-3xl font-medium tracking-wide text-indigo-900">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-1 gap-6 px-10 mt-5 lg:grid-cols-4">
        {heroDetails.map((heroDetail) => (
          <HeroCard
            key={heroDetail.title}
            title={heroDetail.title}
            description={heroDetail.description}
            icon={heroDetail.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
