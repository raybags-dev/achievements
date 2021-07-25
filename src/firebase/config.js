import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const {
  REACT_APP_PHOTO_GALLERY_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_PHOTO_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: REACT_APP_PHOTO_GALLERY_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: "achievements-collection",
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_PHOTO_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, projectAuth, timestamp };
