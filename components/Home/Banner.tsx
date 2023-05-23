import Image from "next/image";

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 space-y-2 bg-blue-900 h-72 lg:h-auto lg:px-0">
      <h1 className="text-base font-semibold tracking-wide text-center text-white lg:text-3xl">
        {title}
      </h1>
      <div className="relative w-full h-32">
        <Image
          src="/content/site/PIAHS_APPROVED2.png"
          alt="approved"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Banner;
