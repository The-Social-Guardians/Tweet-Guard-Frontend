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
    <div className="mt-10 grid h-96 w-full grid-cols-2 place-items-center gap-12 gap-y-16 overflow-y-auto overflow-x-hidden p-4 pb-10 md:mt-14 md:grid-cols-3 lg:w-2/3">
      {contributors.length > 0 &&
        contributors.map((contributor, index) => (
          <ContributorCard
            name={contributor["github-name"]}
            image={`${githubAvatarBaseURL}/${contributor["github-username"]}`}
            twitter={contributor["twitter-url"]}
            github={`${githubProfileBaseURL}/${contributor["github-username"]}`}
            key={index}
          />
        ))}
    </div>
  );
}

export default ContributorsList;
