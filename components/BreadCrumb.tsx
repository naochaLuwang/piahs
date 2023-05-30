import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

interface BreadCrumbProps {
  home: string;
  link: string;
  sublink: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ home, link, sublink }) => {
  return (
    <div className="flex flex-wrap items-center mt-5 space-x-2 text-sm font-medium tracking-wide">
      <Link href={"/"}>
        <h1 className="text-blue-600">{home}</h1>
      </Link>
      <BiChevronRight className="text-neutral-500" />
      <h1 className="text-neutral-500">{link}</h1>
      <BiChevronRight className="text-neutral-500" />
      <h1 className="text-neutral-500">{sublink}</h1>
    </div>
  );
};

export default BreadCrumb;
