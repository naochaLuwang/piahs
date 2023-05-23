import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="relative w-full mb-10 h-96">
      <div className="flex space-x-2">
        <div className="flex flex-col w-40 py-5 mr-2 lg:w-56">
          <FaQuoteLeft className="text-2xl text-neutral-500" />
          <p className="text-xs font-medium tracking-wide text-justify lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            error perferendis odit unde incidunt ducimus! Fugiat reprehenderit
            repellat perferendis quisquam culpa nulla unde cum reiciendis
            pariatur commodi, nisi modi facere.
          </p>
          <div className="absolute flex flex-col border-0 border-t-2 border-blue-400 bottom-5">
            <h1 className="text-base font-medium text-blue-500">John Doe</h1>
            <p className="text-sm text-neutral-600">BPT 2nd semester</p>
          </div>
        </div>
        <div className="relative h-56 mt-3 ml-2 bg-blue-300 rounded-md w-44">
          <div className="absolute top-1 right-1">
            <div className="relative h-56 w-44">
              <Image src="/amit.jpeg" alt="profile" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
