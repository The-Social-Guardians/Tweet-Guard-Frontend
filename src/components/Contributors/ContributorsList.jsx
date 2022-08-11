import ContributorCard from "./ContributorCard";
import { contributors } from "./contributorList.json";

function ContributorsList() {
  return (
    <div className="mt-10 grid h-96 w-full grid-cols-2 gap-12 overflow-y-auto p-4 md:mt-14 md:grid-cols-3 lg:w-2/3">
      {contributors.map((contributor, index) => (
        <ContributorCard
          name={contributor.name}
          image={contributor.image}
          twitter={contributor.twitter}
          github={contributor.github}
          key={index}
        />
      ))}
    </div>
  );
}

export default ContributorsList;
