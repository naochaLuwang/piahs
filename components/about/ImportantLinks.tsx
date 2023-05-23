import Link from "next/link";
import { MdLink } from "react-icons/md";

const ImportantLinks = () => {
  return (
    <div className="flex flex-col h-auto rounded-md shadow-lg w-96">
      <h1 className="w-full px-4 py-4 text-lg font-medium text-yellow-500 bg-blue-950 rounded-t-md">
        Important Links
      </h1>
      <div className="flex flex-col w-full h-auto py-5 pb-10 space-y-4 font-medium bg-gray-100">
        <div className="flex items-center px-3 space-x-2 border-0 border-b-2">
          <MdLink className="w-6 h-6" />
          <Link href="https://www.pratikshahospitals.com/" target="_blank">
            <h1 className="text-sm">About Pratiksha Hospital</h1>
          </Link>
        </div>
        <div className="flex items-center px-3 space-x-2 border-0 border-b-2">
          <MdLink className="w-6 h-6" />
          <Link href="https://www.pratiksha-edu.in/Home" target="_blank">
            <h1 className="text-sm">Pratiksha School of Nursing</h1>
          </Link>
        </div>
        <div className="flex items-center px-3 space-x-2 border-0 border-b-2">
          <MdLink className="w-6 h-6" />
          <Link href="https://pips.pratiksha-edu.in/" target="_blank">
            <h1 className="text-sm">
              Pratiksha Institute of Pharmaceutical Science
            </h1>
          </Link>
        </div>
        <div className="flex items-center px-3 space-x-2 ">
          <MdLink className="w-6 h-6" />
          <Link
            href="https://www.pratiksha-edu.in/pratiksha-college-of-nursing"
            target="_blank"
          >
            <h1 className="text-sm">Pratiksha College of Nursing</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
