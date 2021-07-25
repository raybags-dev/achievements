import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

// handle uploads
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //   refferences to where file should be saved
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("achievements");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // get percentage of progress
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        //   set progress
        setProgress(Math.floor(percentage));
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        // save document in database
        collectionRef.add({ url, createdAt });

        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
