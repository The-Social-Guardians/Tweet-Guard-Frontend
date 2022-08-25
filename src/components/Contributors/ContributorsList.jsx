import { useState, useEffect } from "react";
import ContributorCard from "./ContributorCard";
import { contributorsJSON } from "./contributorList.json";

function ContributorsList() {
  const [contributors, setContributors] = useState([]);
  const githubAvatarBaseURL = "https://avatars.githubusercontent.com";
  const githubProfileBaseURL = "https://github.com";

  useEffect(() => {
    setContributors(contributorsJSON);
  }, []);

  return (
    <div
      className={`mt-10 grid h-96 w-full pb-10 grid-cols-${
        contributors.length >= 2 ? "2" : contributors.length
      } place-items-center gap-12 gap-y-16 overflow-y-auto overflow-x-hidden p-4 md:mt-14 md:grid-cols-${
        contributors.length >= 3 ? "3" : contributors.length
      } lg:w-2/3`}
    >
      {contributors.length > 0 &&
        contributors.map((contributor, index) => (
          <ContributorCard
            name={contributor["github-name"]}
            image={`${githubAvatarBaseURL}/${contributor["github-username"]}`}
            twitter={contributor.twitter}
            github={`${githubProfileBaseURL}/${contributor["github-username"]}`}
            key={index}
          />
        ))}
    </div>
  );
}

export default ContributorsList;
