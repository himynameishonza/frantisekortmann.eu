import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export default function Carousel({ images }: { images: number }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imagesPaths = [];
  for (var i = 1; i <= images; i++) {
    imagesPaths.push("/static/galleries/intro/" + i + ".jpg");
  }

  const resetSlides = useCallback(
    ({ mode }: { mode: "end" | "start" }) => {
      mode === "end" ? setCurrentSlide(0) : setCurrentSlide(images - 1);
    },
    [setCurrentSlide, images]
  );

  const nextSlide = useCallback(() => {
    currentSlide < images - 1
      ? setCurrentSlide(currentSlide + 1)
      : resetSlides({ mode: "end" });
  }, [currentSlide, images, resetSlides]);

  const prevSlide = () => {
    currentSlide > 0
      ? setCurrentSlide(currentSlide - 1)
      : resetSlides({ mode: "start" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [nextSlide]);

  return (
    <div className=" bg-black h-full relative">
      <a
        onClick={() => prevSlide()}
        className="absolute py-2 px-3 bg-white rounded-r-md z-10 left-0 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-slate-100"
      >
        <FontAwesomeIcon icon="arrow-left" />
      </a>

      <a
        onClick={() => nextSlide()}
        className="absolute py-2 px-3 bg-white rounded-l-md z-10 right-0 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-slate-100"
      >
        <FontAwesomeIcon icon="arrow-right" />
      </a>

      <Image
        src={imagesPaths[currentSlide]}
        layout="fill"
        objectFit="cover"
        blurDataURL="/static/system/blur.jpg"
        placeholder="blur"
        loading="lazy"
        className="select-none"
        alt=""
      />
    </div>
  );
}
