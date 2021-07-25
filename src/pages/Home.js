import React, { useState } from "react";
import { withRouter } from "react-router";

import { projectAuth } from "../firebase/config";

import ImageGrid from "../comps/ImageGrid";
import Title from "../comps/Title";
import UploadForm from "../comps/UploadForm";
import Model from "../comps/Model";

const Home = ({ history }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleSignOut = () => {
    history.push("/login");
    projectAuth.signOut();
  };

  return (
    <div className="App">
      <button className="logout-btn" onClick={handleSignOut}>
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
