import CTAText from "./CTAText";
import CTAImage from "./CTAImage";
import Separator from "../common/Separator";

// Fetch from DB, ansd store in users variable
function getUserCount() {
  const users = 0;
  const roundedUserBase = users - (users % 50);

  return roundedUserBase;
}

function CTA() {
  return (
    <section
      className="flex justify-center bg-slate-800 p-4 pb-0 pt-24 md:px-10 lg:px-20"
      id="cta"
    >
      <section className="center-focus flex-col items-stretch">
        <div className="lg:flex lg:flex-row-reverse">
          <CTAText />
          <CTAImage userCount={getUserCount()} />
        </div>
        <Separator />
      </section>
    </section>
  );
}

export default CTA;
