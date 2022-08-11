import Separator from "../common/Separator";
import Intro from "./Intro";
import ContributorsList from "./ContributorsList";

function Contributors() {
  return (
    <section
      className="flex flex-col items-center justify-center p-4 pb-0 pt-24 md:px-10 lg:px-20"
      id="contributors"
    >
      <Intro />
      <ContributorsList />
      <Separator />
    </section>
  );
}

export default Contributors;
