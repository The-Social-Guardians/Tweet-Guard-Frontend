function NavFooter() {
  const copyrightYear = () => new Date().getFullYear();

  return (
    <article className="absolute bottom-8 left-0 right-0 text-center text-secondary lg:opacity-0">
      <div className="outline-3 mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full outline outline-secondary">
        {/* Dummy Icon. Must be replaced with the original one... */}
        <img
          src="/assets/icons/shield.svg"
          alt="Dummy logo"
          className="h-20 w-20 lg:hidden"
        />
      </div>

      <h1 className="text-2xl font-semibold uppercase transition-opacity duration-500 lg:hidden">
        Tweet Guard
      </h1>
      <p className="text-xs font-semibold">
        Copyright © <span className="copyright-year">{copyrightYear()}</span>.
        All Rights Reserved
      </p>
    </article>
  );
}

export default NavFooter;
