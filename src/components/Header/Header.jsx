import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Header() {
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);
  let menuButtonTransform;

  function toggleNavMenu() {
    setIsNavMenuActive((prevVal) => !prevVal);
  }

  // A simple animation on button click.
  menuButtonTransform = isNavMenuActive ? `rotate-180` : `rotate-0`;

  function closeNavMenu(event) {
    // Close Nav Menu if clicked anywhere except the menu button and the Nav menu
    if (
      event.target === document.querySelector(".menu") ||
      (event.target.closest("article") &&
        event.target.closest("article").classList.contains("nav-menu"))
    )
      return;

    setIsNavMenuActive(false);
  }

  useEffect(() => {
    document.body.addEventListener("click", closeNavMenu);

    return () => {
      document.body.removeEventListener("click", closeNavMenu);
    };
  }, []);

  return (
    <header
      className={`${
        isNavMenuActive ? "bg-transparent" : "bg-secondary"
      } sticky top-0 z-10 flex justify-center p-4 md:px-10 lg:translate-y-0 lg:p-5 lg:px-20`}
    >
      <section className="center-focus">
        <button
          className={`menu relative z-40 transition-transform duration-500 lg:hidden ${menuButtonTransform}`}
          onClick={toggleNavMenu}
        >
          <img
            src="./assets/icons/menu.svg"
            alt="Responsive Menu"
            className={`h-6 w-6 filter ${
              isNavMenuActive ? "nav-menu--active" : "invert"
            } pointer-events-none`}
          />
        </button>

        <Navbar showMenu={isNavMenuActive} />

        <h2
          className={`${
            isNavMenuActive && "opacity-0"
          } text-xl font-semibold uppercase transition-opacity duration-500 lg:text-3xl`}
        >
          Tweet Guard
        </h2>
      </section>
    </header>
  );
}

export default Header;
