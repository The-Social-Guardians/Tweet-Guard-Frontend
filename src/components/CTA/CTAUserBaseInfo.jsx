function CTAUserBaseInfo({ userCount }) {
  return (
    <p className="mt-8 text-center text-lg text-neutral-300">
      More than
      <span className="font-semibold text-primary"> {userCount} </span>
      people that use our service are safe from harmful, abusive and violent DMs
    </p>
  );
}

export default CTAUserBaseInfo;
