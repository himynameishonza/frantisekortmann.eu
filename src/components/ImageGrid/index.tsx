import Masonry from "react-masonry-css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";

export default function ImageGrid({
  folder,
  images,
}: {
  folder: "show" | "people" | "detail";
  images: number;
}) {
  const imagesPaths = [];
  for (var i = 1; i <= images; i++) {
    imagesPaths.push("/static/galleries/" + folder + "/" + i + ".jpg");
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [mediaModal, setMediaModal] = useState(false);
  const [imgURL, setMediaURL] = useState(null);

  return (
    <>
      {mediaModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black z-20 p-4">
          <a
            onClick={() => setMediaModal(false)}
            className="px-4 py-3 bg-slate-400 flex items-center justify-center fixed top-4 rounded-md right-4 hover:bg-white cursor-pointer"
          >
            <FontAwesomeIcon icon="times" />
          </a>
          <div className="flex items-center justify-center h-full max-w-full max-h-full">
            <img src={imgURL} alt="" />
          </div>
        </div>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto bg-black relative"
      >
        {imagesPaths.map((image, index) => {
          return (
            <div
              key={index}
              className="w-auto h-auto aspect-w-3 aspect-h-2 relative cursor-pointer group"
            >
              <div
                onClick={() => {
                  setMediaModal(true), setMediaURL(image);
                }}
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-700 bg-opacity-0 z-10 group-hover:bg-opacity-70 transition-all"
              >
                <FontAwesomeIcon
                  icon="search"
                  className="text-slate-100 text-4xl opacity-0 group-hover:opacity-80 transition-all"
                />
              </div>
              <Image
                layout="fill"
                src={image}
                alt=""
                objectFit="cover"
                blurDataURL="/static/system/blur.jpg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          );
        })}
      </Masonry>
    </>
  );
}
