import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";

import { projectAuth } from "../firebase/config";

import ImageGrid from "../comps/ImageGrid";
import Title from "../comps/Title";
import UploadForm from "../comps/UploadForm";
import Model from "../comps/Model";

const Home = ({ history }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  // click logout btn on load
  const buttonRef = useRef(null);

  // Auto logout when on DOM render
  useEffect(() => {
    buttonRef.current.click();
  }, []);

  const handleSignOut = () => {
    history.push("/login");
    projectAuth.signOut();
  };

  return (
    <div className="App">
      <button ref={buttonRef} className="logout-btn" onClick={handleSignOut}>
        Logout
      </button>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default withRouter(Home);
