import Button from "../common/Button";

function HeroText() {
  return (
    <section className="lg:w-1/2 lg:py-14">
      <h2 className="text-4xl font-semibold leading-snug lg:text-6xl">
        Make your Twitter Experience
        <span className="text-popping"> Peaceful.</span>
      </h2>
      <p className="mt-8 text-xl leading-relaxed lg:mt-20 lg:text-2xl lg:leading-relaxed">
        Have you ever recieved harmful, rude and offensive messages in you
        Twitter DM? Worry not, we are here help you prevent such occurances.
      </p>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 p-0.5 md:mt-20 md:flex-row lg:mt-28">
        <a
          href="#cta"
          className="hero-link animate-pulse-custom bg-popping text-secondary hover:animate-none"
        >
          Know More
        </a>
        <a
          href="#report"
          className="hero-link ring-2 ring-inset ring-slate-300 transition-[shadow_colors] hover:ring-popping"
        >
          Report Abuser
        </a>
      </div>
    </section>
  );
}

export default HeroText;
