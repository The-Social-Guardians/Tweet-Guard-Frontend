function Button({
  clickEvent,
  customWidth,
  buttonType,
  buttonText,
  buttonIcon,
  altText,
}) {
  const buttonStyle = `${
    buttonType === "primary"
      ? "bg-popping text-secondary"
      : " ring-2 ring-inset ring-slate-300  transition-[shadow_colors] hover:ring-popping"
  } flex justify-center items-center ${
    customWidth ? customWidth : "w-3/4"
  } mt-8 rounded-sm p-2 py-4 text-lg font-semibold uppercase`;

  return (
    <button className={buttonStyle} onClick={clickEvent}>
      {buttonText}
      {buttonIcon && (
        <img src={buttonIcon} alt={altText} className="ml-3 h-6 w-6" />
      )}
    </button>
  );
}

export default Button;
