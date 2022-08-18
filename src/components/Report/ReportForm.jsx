import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../common/Button";

function ReportForm() {
  const [formData, setFormData] = React.useState({
    username: "",
    "abuser-name": "",
    file: null,
  });

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    const [file] = acceptedFiles;
    formData.append("file", file);

    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function submitReport(event) {
    event.preventDefault();

    // Form validation.
    for (const [key, value] of Object.entries(formData)) {
      if (key === "file") {
        const dropZone = document.querySelector(`.drop-zone`);
        const dropZoneText = document.querySelector(`.drop-zone-text`);

        if (!formData.file) {
          dropZone.classList.add("outline-red-600");
          dropZoneText.innerHTML = "No Image Found!";
          dropZoneText.classList.add("text-red-500");
          return;
        } else {
          dropZone.classList.remove("outline-red-600");
          dropZoneText.innerHTML = "Drag and drop the image here";
          dropZoneText.classList.remove("text-red-500");
        }
        continue;
      }

      const inputElement = document.querySelector(`.form-input--${key}`);
      if (value === "") {
        inputElement.classList.add("form-input--invalid");
        inputElement.nextElementSibling.classList.add(
          "form-invalid-message--show"
        );
        return;
      } else {
        inputElement.classList.remove("form-input--invalid");
        inputElement.nextElementSibling.classList.remove(
          "form-invalid-message--show"
        );
      }
    }

    /* 
      Add functionality here to store formData in the backend.
      formData contains the following keys
        username,
        abuser-name,
        file(The screenshot uploaded by the user)
    */
  }

  return (
    <form
      className="mt-10 flex w-11/12 flex-col items-center lg:mt-0 lg:w-1/2"
      onSubmit={submitReport}
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Your Name"
          name="username"
          className="form-input form-input--username"
          onChange={handleFormChange}
          value={formData.username}
        />
        <p className="form-invalid-message">Username cannot be empty!</p>
      </div>

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Twitter Handle Of The Abuser"
          name="abuser-name"
          className="form-input form-input--abuser-name"
          onChange={handleFormChange}
          value={formData["abuser-name"]}
        />
        <p className="form-invalid-message">The abuser name cannot be empty!</p>
      </div>

      <div className="flex w-full flex-col items-center">
        <p className="mt-10 text-center text-lg lg:my-5">
          Upload a screenshot of the abusive message
        </p>

        <div className="drop-zone" {...getRootProps()}>
          <div className="hidden lg:block">
            <img
              src="/assets/icons/upload-file.svg"
              className="mx-auto h-20 w-20 invert filter"
            />
            <p className="drop-zone-text text-xl">
              Drag and drop the image here
            </p>
          </div>

          <p className="hidden text-2xl font-semibold lg:block">OR</p>

          <div className="flex flex-col items-center">
            <label
              htmlFor="filename"
              className="inline-block cursor-pointer rounded bg-primary p-3 font-semibold text-secondary"
              onClick={(event) => event.stopPropagation()}
            >
              Upload File
            </label>
            <input
              type="file"
              id="filename"
              name="filename"
              className="form-input--file hidden"
              accept="image/png, image/gif, image/jpeg"
              {...getInputProps()}
            />
          </div>
        </div>
      </div>

      <Button buttonText="Submit Report" customWidth="w-3/4 lg:w-1/2" />
    </form>
  );
}

export default ReportForm;
