import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  imageUrl?: string;
}

const Logo: FC<LogoProps> = ({ imageUrl }) => {
  return (
    <div className="relative flex-shrink-0 w-24 h-24 bg-white rounded-xl">
      <Link href="/">
        <Image src={imageUrl!} alt="logo" fill style={{ objectFit: "fill" }} />
      </Link>
    </div>
  );
};

export default Logo;
