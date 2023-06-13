import Image from "next/image";
import React from "react";

interface AlbulmCardProps {
  image: string;
  title: string;
  count: number;
  onClick: () => void;
}

const AlbulmCard: React.FC<AlbulmCardProps> = ({
  image,
  title,
  count,
  onClick,
}) => {
  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div className="flex flex-col items-center w-64 h-64 px-10 py-2 space-y-4 rounded-md shadow-md cursor-pointer bg-gradient-to-b from-blue-400 to-blue-900 group">
      <div className="relative h-48 border-2 w-60">
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "fill" }}
          onClick={handleCardClick}
          // onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-medium text-white">{title}</h1>
        <p className="text-sm text-white">({count}) images</p>
      </div>
    </div>
  );
};

export default AlbulmCard;
