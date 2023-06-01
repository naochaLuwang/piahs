"use client";

import { useState, useEffect } from "react";
import { getAllAlbulms } from "../actions/getAllAlbum.ts";
import AlbulmCard from "../../components/AlbulmCard";
import Link from "next/link";
import ImageCarousal from "../../components/Home/Carousal";
import { Skeleton } from "@/components/ui/skeleton";

const AlbumPage = () => {
  const [albums, setAlbums] = useState<AlbumProps[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumProps>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/albulm`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setIsLoading(false);
      });
  }, []);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  console.log(selectedAlbum);

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-screen px-10 py-10 mt-32">
        <h1 className="text-2xl font-babas text-blue-950">Photo Gallery</h1>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="w-64 h-64 " />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen px-10 py-10 mt-32">
      <h1 className="text-2xl font-babas text-blue-950">Photo Gallery</h1>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {albums &&
          albums.map((album) => (
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
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="absolute inset-0 w-full h-screen bg-black opacity-50"></div>
          <div className="z-10 p-4 bg-white max-w-7xl">
            <h2 className="mb-4 text-lg font-semibold">
              {selectedAlbum.title}
            </h2>
            <ImageCarousal carousalImages={selectedAlbum.images} />

            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
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

export default AlbumPage;
