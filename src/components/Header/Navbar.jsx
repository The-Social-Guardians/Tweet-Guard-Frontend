import ListItem from "./ListItem";
import NavFooter from "./NavFooter";

function Navbar({ showMenu }) {
  const navLinksData = [
    {
      targetSection: "top",
      linkIcon: "home.svg",
      linkText: "Home",
    },
    {
      targetSection: "cta",
      linkIcon: "cta.svg",
      linkText: "Get Started",
    },

    {
      targetSection: "report",
      linkIcon: "report.svg",
      linkText: "Report An Abuser",
    },

    {
      targetSection: "working",
      linkIcon: "how-it-works.svg",
      linkText: "How It Works",
    },

    {
      targetSection: "contributors",
      linkIcon: "contributors.svg",
      linkText: "Contributors",
    },
  ];

  return (
    <article
      className={`${
        showMenu || "-translate-x-full shadow-none"
      } absolute left-0 top-0 h-screen w-2/3 bg-gradient-to-r from-neutral-200 to-sky-200 backdrop-blur-xl transition-transform duration-300 ease-in-out md:w-1/2 lg:static lg:mr-10 lg:h-auto lg:grow lg:translate-x-0 lg:bg-gradient-to-r lg:from-transparent`}
    >
      <nav className="mx-4 mt-28 md:ml-10 lg:mt-0 lg:ml-0">
        <ul className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-2 lg:p-0">
          {navLinksData.map((navLink, index) => (
            <ListItem
              key={index}
              targetSection={navLink.targetSection}
              linkIcon={navLink.linkIcon}
              linkText={navLink.linkText}
            />
          ))}
        </ul>
      </nav>

      <NavFooter />
    </article>
  );
}

export default Navbar;
