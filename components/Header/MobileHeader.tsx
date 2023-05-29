import Image from "next/image";
import Link from "next/link";

const MobileHeader = () => {
  return (
    <div className="fixed top-0 z-50 flex flex-col w-full h-32 px-2 py-3 overflow-hidden shadow-sm bg-indigo-950 lg:hidden">
      <div className="flex w-full space-x-3">
        <div className="relative flex-shrink-0 w-20 h-20">
          <Image src="/PIAHS_logo.png" alt="logo" fill />
        </div>
        <div className="flex flex-col space-y-1">
          <h1 className="text-sm font-medium text-white">
            PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE
          </h1>
          <p className="text-xs text-white">
            (Under Pratiksha Educational Trust)
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 space-x-2 text-xs font-medium text-white ">
        <Link href="/">
          <h1 className="pr-1 border-0 border-r-2 border-blue-700">
            News & Events
          </h1>
        </Link>
        <Link href="/">
          <h1 className="pr-1 border-0 border-r-2 border-blue-700">
            Online Apply
          </h1>
        </Link>
        <Link href="/">
          <h1 className="pr-1 border-0 border-r-2 border-blue-700">
            Get in Touch
          </h1>
        </Link>
        <Link href="/">
          <h1>Results</h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
