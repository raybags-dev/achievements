import React from "react";
import { useState, useRef } from "react";

import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

const UploadForm = () => {
  // click input handler
  const inputRef = useRef(null);

  // set file
  const [file, setFile] = useState(null);
  //   set error
  const [error, setError] = useState(null);
  //   set valid image types
  const types = [
    "application/pdf",
    "application/docx",
    ".pdf",
    "image/pdf",
    "image/jpeg",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  // on file upload handler
  const changeHandler = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      //   no error initially / reset error if selected is truthy
      setError("");
    } else {
      // reset file
      setFile(null);
      setError(`Error. Allowed formats: '.pdf' or '.docx'`);
    }
  };

  //   handle select input when span is clicked
  const handleInputClick = () => {
    return inputRef.current.focus();
  };

  return (
    <form className="select-img-form">
      <label className="label">
        <input
          className="select-image-input"
          type="file"
          ref={inputRef}
          onChange={changeHandler}
        />

        <span onClick={handleInputClick}>+</span>
      </label>
      {/* output div */}
      <div className="output">
        {/* render error  */}
        {error && (
          <motion.p
            className="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {error}
          </motion.p>
        )}
        {/* render image */}
        {file && (
          <div className="image" download>
            {file.name}
          </div>
        )}
        {/* progress bar */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
