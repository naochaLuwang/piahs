"use client";

import { useState } from "react";
import AlbulmCard from "./AlbulmCard";
import ImageCarousal from "./Home/Carousal";

const AlbulmContainer = ({ data }: any) => {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumProps | null>(null);

  const handleAlbumClick = (album: AlbumProps) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  console.log(selectedAlbum);

  return (
    <div className="flex flex-col items-center w-full h-screen px-10 py-5 mt-40 lg:items-start">
      <h1 className="text-2xl lg:text-3xl font-babas text-blue-950">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data &&
          data.map((album: any) => (
            <AlbulmCard
              key={album.title}
              image={album.thumbnailImage}
              title={album.title}
              count={album?.images?.length}
              onClick={() => handleAlbumClick(album)}
            />
          ))}
      </div>
      {selectedAlbum && (
        <div className="inset-0 z-50 items-center justify-center hidden w-full h-screen transform -translate-x-1/2 -translate-y-1/2 lg:flex lg:fixed top-1/2 left-1/2">
          <div className="absolute inset-0 w-full h-screen bg-black opacity-50"></div>
          <div className="relative z-10 p-4 bg-white max-w-7xl rounded-xl">
            <h2 className="mb-4 text-xl font-babas">{selectedAlbum.title}</h2>
            <ImageCarousal carousalImages={selectedAlbum.images} />

            <button
              className="px-4 py-2 mt-2 text-white rounded bg-indigo-950 "
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbulmContainer;
