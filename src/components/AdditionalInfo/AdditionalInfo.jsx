import Intro from "./Intro";
import Image from "./Image";
import InfoCardContainer from "./InfoCardContainer";
import Separator from "../common/Separator";

function AdditionalInfo() {
  return (
    <section
      className="flex flex-col justify-center p-4 pb-0 pt-24 md:px-10 lg:flex-col lg:px-20 lg:pt-5"
      id="working"
    >
      <section className="w-full lg:flex lg:flex-row">
        <Intro />
        <Image />
      </section>
      <InfoCardContainer />
      <Separator />
    </section>
  );
}

export default AdditionalInfo;
