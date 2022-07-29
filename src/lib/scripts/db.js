import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBjN7uzlDFRQz2gkBjmRFTXXw9j-xePMM0",
  authDomain: "fcoder-8dfad.firebaseapp.com",
  projectId: "fcoder-8dfad",
  storageBucket: "fcoder-8dfad.appspot.com",
  messagingSenderId: "121613056643",
  appId: "1:121613056643:web:d221a97f16fb5aff9e39b6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const challengesRef = collection(db, "challenges");

const getChallenge = async (code) => {
  const q = query(challengesRef, where("code", "==", code));
  const res = [];
  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => res.push(doc));

  if (res.length === 0) return null;
  return res[0];
};

export { getChallenge };
