function ContributorCard({ name, image, twitter, github }) {
  return (
    <article className="group relative flex h-24 w-full flex-col items-center justify-center lg:h-28">
      <div className="flex h-14 w-14 items-center justify-center rounded-full outline-dashed outline-4 outline-popping lg:h-20 lg:w-20">
        <img src={image} alt={name} className="h-10 w-10 lg:h-14 lg:w-14" />
      </div>

      <a
        href={twitter}
        className="absolute left-0 top-4 overflow-x-hidden rounded-full bg-neutral-100/90 p-2 opacity-0 transition-[left_opacity] group-hover:left-2 group-hover:opacity-100 group-hover:md:left-1/4"
      >
        <img
          src="/assets/icons/twitter.svg"
          alt="Twitter"
          className="h-5 w-5"
        />
      </a>

      <a
        href={github}
        className="absolute right-0 top-4 overflow-x-hidden rounded-full bg-neutral-100/90 p-2 opacity-0 transition-[right_opacity] group-hover:right-2 group-hover:opacity-100 group-hover:md:right-1/4"
      >
        <img src="/assets/icons/github.svg" alt="Github" className="h-5 w-5" />
      </a>

      <p className="absolute bottom-5 opacity-0 transition-[bottom_opacity] group-hover:-bottom-5 group-hover:opacity-100">
        {name}
      </p>
    </article>
  );
}

export default ContributorCard;
