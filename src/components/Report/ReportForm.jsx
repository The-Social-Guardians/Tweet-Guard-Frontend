import Button from "../common/Button";

function ReportForm() {
  return (
    <form className="mt-10 flex w-11/12 flex-col items-center lg:mt-0 lg:w-1/2">
      <input
        type="text"
        placeholder="Your Name"
        name="username"
        className="form-input"
        required
      />
      <input
        type="text"
        placeholder="Twitter Handle Of The Abuser"
        name="abuser-name"
        className="form-input"
        required
      />

      <div className="flex w-full flex-col items-center">
        <p className="mt-10 text-center text-lg lg:my-5 lg:mt-0">
          Upload a screenshot of the abusive message
        </p>

        <div className="my-4 flex h-20 w-full flex-col items-center justify-center outline-neutral-400/50 lg:h-72 lg:w-2/3 lg:justify-between lg:p-14 lg:outline-dashed">
          <p className="hidden text-xl lg:block">
            Drag and drop the image here
          </p>
          <p className="hidden text-2xl font-semibold lg:block">OR</p>

          <div className="flex flex-col items-center">
            <label
              htmlFor="filename"
              className="inline-block cursor-pointer rounded bg-primary p-3 font-semibold text-secondary"
            >
              Upload File
            </label>
            <input
              type="file"
              id="filename"
              name="filename"
              className="hidden w-fit"
              accept="image/png, image/gif, image/jpeg"
              required
            />
          </div>
        </div>
      </div>

      <Button buttonText="Submit Report" customWidth="w-3/4 lg:w-1/2" />
    </form>
  );
}

export default ReportForm;
