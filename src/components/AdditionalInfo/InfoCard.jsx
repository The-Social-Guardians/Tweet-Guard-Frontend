function InfoCard({ title, listContent }) {
  return (
    <article className="my-2 bg-neutral-50/10 p-2 lg:my-0 lg:mx-2 lg:w-1/2">
      <h4 className="py-5 text-center text-xl font-semibold lg:text-2xl">
        {title}
      </h4>
      <ul className="pl-7">
        {listContent &&
          listContent.map((listItem, index) => (
            <li
              className="my-4 list-outside list-disc leading-5 lg:text-lg lg:leading-7"
              key={index}
            >
              {listItem}
            </li>
          ))}
      </ul>
    </article>
  );
}

export default InfoCard;
