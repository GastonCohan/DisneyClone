import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpt9mVuHO0S_RTPkr0bM36PVsKDEPyK6U",
  authDomain: "disneyplus-clone-ac1b7.firebaseapp.com",
  projectId: "disneyplus-clone-ac1b7",
  storageBucket: "disneyplus-clone-ac1b7.appspot.com",
  messagingSenderId: "529138801840",
  appId: "1:529138801840:web:5a453cc2263be65edeef75",
  measurementId: "G-QKXRNQJ8TL",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, signInWithPopup };
export default db;
