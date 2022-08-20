import { useEffect } from "react";

function Slide({ slideNumber, slideImage, slideText }) {
  const initialTranslate = `${(slideNumber - 1) * 100}`.replace("100", "full");
  const slideClass = `slide--${slideNumber} absolute inset-0 transition-transform duration-1000 translate-x-${initialTranslate}`;

  return (
    <div className={slideClass}>
      <img
        src={`/assets/images/${slideImage}`}
        className="h-full w-full object-cover"
      />
      <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center text-sm backdrop-blur-xl lg:text-base">
        {slideText}
      </p>
    </div>
  );
}

export default Slide;
