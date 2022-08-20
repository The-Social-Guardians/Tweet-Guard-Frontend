import InfoCard from "./InfoCard";

function InfoCardContainer() {
  const firstList = [
    "You enter the deatils in the form above, which contains the Twitter handle of the abuser, which we store in the backend, to prevent further abuses from that person.",
    "If the abuser DMs another Twitter user that uses our service, the DM gets deleted instantly.",
    "The offender, spends their time wondering why they did not get a reply! ",
  ];

  const secondList = [
    "If you choose to link your Twitter account, we first scan the name of the person that DMs you.",
    "After we get their Twitter handle, we run it against our entries in our database, and, if an entry is found, we delete the DM.",
    "And so, you don't get bothered by an already known abuser!",
  ];

  return (
    <section className="flex w-full flex-col lg:flex-row lg:justify-between">
      <InfoCard
        title="When You Report An Abuser"
        listContent={firstList}
        key="card--1"
      />
      <InfoCard
        title="When Someone DMs You"
        listContent={secondList}
        key="card--"
      />
    </section>
  );
}

export default InfoCardContainer;
