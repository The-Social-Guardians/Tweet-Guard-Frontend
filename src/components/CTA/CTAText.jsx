import Button from "../common/Button";

function CTAText() {
  // Link Twitter API here.
  function linkTwitterAccount() {
    console.log(`Linking twitter account`);
  }

  return (
    <article className="flex flex-col items-center lg:w-1/2 lg:p-20">
      <h3 className="pb-4 text-center text-3xl font-semibold lg:text-4xl">
        Peace Of Mind Is Just A Single Click Away
      </h3>

      <p className="mt-8 text-justify text-xl leading-relaxed md:mb-10 lg:mb-20 lg:mt-14 lg:text-2xl lg:leading-relaxed">
        Link your Twitter account and let us take care of keeping your DM safe
        from toxic and abusive people.
      </p>

      <Button
        buttonText="Link Your Twitter"
        buttonIcon="/assets/icons/left-arrow.svg"
        altText="Left Arrow"
        clickEvent={linkTwitterAccount}
      />
    </article>
  );
}

export default CTAText;
