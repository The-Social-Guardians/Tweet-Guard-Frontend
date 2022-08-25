function ContributorCard({ name, image, twitter, github }) {
  return (
    <article className="group relative flex h-24 w-full flex-col items-center justify-center px-14 lg:h-32 lg:w-auto">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full outline-dashed outline-4 outline-popping lg:h-28 lg:w-28">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full lg:h-24 lg:w-24"
        />

        <a
          href={twitter}
          className="absolute -left-full top-4 overflow-x-hidden rounded-full bg-neutral-100/90 p-2 opacity-0 transition-[left_opacity] group-hover:-left-8 group-hover:opacity-100"
          target={"_blank"}
        >
          <img
            src="/assets/icons/twitter.svg"
            alt="Twitter"
            className="h-5 w-5"
          />
        </a>

        <a
          href={github}
          className="absolute -right-full top-4 overflow-x-hidden rounded-full bg-neutral-100/90 p-2 opacity-0 transition-[right_opacity] group-hover:-right-8 group-hover:opacity-100"
          target={"_blank"}
        >
          <img
            src="/assets/icons/github.svg"
            alt="Github"
            className="h-5 w-5"
          />
        </a>
      </div>

      <p className="absolute bottom-0 text-center opacity-0 transition-[bottom_opacity] group-hover:-bottom-10 group-hover:opacity-100">
        {name}
      </p>
    </article>
  );
}

export default ContributorCard;
