import Separator from "../common/Separator";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <main className="flex justify-center bg-hero-image bg-cover bg-center bg-no-repeat p-4 pb-0 md:px-10 md:pt-5 lg:px-20">
      <section className="center-focus flex-col">
        <section className="pt-10 lg:flex lg:flex-row" id="hero">
          <HeroText />
          <HeroImage />
        </section>

        <Separator />
      </section>
    </main>
  );
}

export default Hero;
