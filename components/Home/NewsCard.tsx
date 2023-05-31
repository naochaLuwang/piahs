import Image from "next/image";
import { BiChevronsRight } from "react-icons/bi";

const NewsCard = () => {
  return (
    <div className="relative flex flex-col items-center w-full mb-10 mr-2 bg-white border rounded-lg shadow-xl lg:mx-2 h-96 lg:w-72">
      <div className="relative w-full rounded-t-lg h-44">
        <Image
          src="/blt.jpeg"
          alt=""
          fill
          className="rounded-t-lg"
          style={{ objectFit: "fill" }}
        />
      </div>

      <div className="flex flex-col items-start w-full px-4 py-3 overflow-hidden h-36">
        <h1 className="text-sm font-medium text-center text-neutral-800">
          Lorem dior set ipsum generator
        </h1>
        <p className="mt-3 text-xs">
          Nulla non vestibulum urna. Mauris at iaculis nisi, eget venenatis
          dolor. Etiam efficitur nisi arcu, a convallis lectus ultricies vel.
          Maecenas sagittis convallis fringilla. Aenean pretium lacus velit,
          pellentesque aliquam velit ultrices eu. Etiam egestas odio et massa
          semper ullamcorper at sed tortor. Donec pellentesque tincidunt justo,
          vel feugiat nulla euismod hendrerit. Cras id odio id turpis cursus
          cursus.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 z-20 w-full ">
        <div className="flex items-center justify-end px-2 py-1 text-white bg-neutral-800">
          <h1 className="text-sm font-medium">Read more</h1>
          <BiChevronsRight />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
