import { useEffect } from "react";
import Slide from "./Slide";
import CTAUserBaseInfo from "./CTAUserBaseInfo";

function CTAImage({ userCount }) {
  useEffect(() => {
    const slideInterval = setInterval(() => {
      document.querySelector(".slide--1").classList.toggle("-translate-x-full");
      document.querySelector(".slide--2").classList.toggle("translate-x-full");
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <article className="mt-10 lg:w-1/2">
      <div className="relative h-96 w-full overflow-hidden bg-red-400 lg:h-[35rem]">
        <Slide
          slideNumber="1"
          slideImage="cta-image-1.png"
          slideText="Communicate with the right people, and avoid offensive, rude DMs"
        />

        <Slide
          slideNumber="2"
          slideImage="cta-image-2.png"
          slideText="Don't waste your time, and lose your peace with idiots!"
        />
      </div>

      {userCount >= 50 && <CTAUserBaseInfo userCount={userCount} />}
    </article>
  );
}

export default CTAImage;
