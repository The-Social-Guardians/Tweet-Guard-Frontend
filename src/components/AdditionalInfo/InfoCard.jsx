function InfoCard({ content, number }) {
  return (
    <article className="my-2 bg-neutral-50/10 p-2 lg:my-0 lg:mx-2 lg:w-1/2">
      <div className="p-7">
        <h2 className="text-2xl font-medium">Step {number + 1}</h2>
        <div className="my-1.5 h-px bg-primary"></div>
        <p className="text-xl">{content}</p>
      </div>
    </article>
  );
}

export default InfoCard;
