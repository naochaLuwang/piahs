import Image from "next/image";

interface HeroCardProps {
  title: string;
  description: string;
  icon: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-start px-8 pt-5 space-y-2 bg-white border border-indigo-900 rounded-lg shadow-xl w-72 h-80">
      <div className="relative w-32 h-32 rounded-full bg-indigo-950">
        <Image
          src={`/content/site/${icon}`}
          alt="icon"
          fill
          style={{ objectFit: "fill" }}
        />
      </div>

      <h1 className="text-lg font-medium text-indigo-950">{title}</h1>
      <p className="text-sm font-normal text-center text-neutral-500">
        {description}
      </p>
    </div>
  );
};

export default HeroCard;
