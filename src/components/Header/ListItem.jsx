function ListItem({ targetSection, linkIcon, linkText }) {
  return (
    <li className="flex items-center lg:mr-8">
      <img
        src={`/assets/icons/${linkIcon}`}
        alt={linkIcon.split(".")[0]}
        className="mr-4 h-4 w-4 md:h-7 md:w-7 lg:hidden"
      />

      <a
        href={`#${targetSection}`}
        className="relative grow font-semibold uppercase text-secondary md:text-xl lg:text-primary lg:after:absolute lg:after:left-3 lg:after:right-3 lg:after:bottom-0 lg:after:h-0.5 lg:after:scale-0 lg:after:bg-popping lg:after:transition-transform lg:hover:after:scale-100"
      >
        {linkText}
      </a>
    </li>
  );
}

export default ListItem;
