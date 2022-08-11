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
          className="flex w-3/4 items-center justify-center rounded-sm bg-popping p-2 py-4 text-lg font-semibold uppercase text-secondary md:w-1/2"
        >
          Know More
        </a>
        <a
          href="#report"
          className="flex w-3/4 items-center justify-center rounded-sm p-2 py-4 text-lg font-semibold uppercase ring-2 ring-inset ring-slate-300 transition-[shadow_colors] hover:ring-popping md:w-1/2"
        >
          Report Abuser
        </a>
      </div>
    </section>
  );
}

export default HeroText;
