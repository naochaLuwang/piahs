import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="flex items-start w-full h-32 bg-red-200 lg:hidden">
      <div className="relative flex-shrink-0 w-20 h-20">
        <Image src="/PIAHS_logo.png" alt="logo" fill />
      </div>
      <h1 className="text-sm">PRATIKSHA INSTITUTE OF ALLIED HEALTH SCIENCE</h1>
    </div>
  );
};

export default MobileHeader;
