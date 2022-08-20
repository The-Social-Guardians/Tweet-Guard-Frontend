import InfoCard from "./InfoCard";

function InfoCardContainer() {
  const instruction = ["Enter the Twitter handle of the abuser (the person who harassed you) in the form above.", "The details are stored in our database for our bot to protect you", "Our bot deletes messages sent to you by anyone in our database"]

  return (
    <section className="flex w-full flex-col lg:flex-row lg:justify-between">
      {instruction?.map((sentence, id) =>
        <InfoCard
          content={sentence}
          number={id}
          key={id}
        />)}
    </section>
  );
}

export default InfoCardContainer;
