import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

// TODO: Migrate configurations to env
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

const storage = getStorage(app);
const challengesRef = collection(db, "challenges");
const blogsRef = collection(db, "blogs");

// Get challenge by code
// return: null if no challenge found, otherwise the first one
const getChallenge = async (code) => {
  const q = query(challengesRef, where("code", "==", code));
  const res = [];
  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => res.push(doc.data()));

  if (res.length === 0) return null;
  return res[0];
};

// Get all blogs
// return: array of blogs
const getBlogs = async () => {
  const res = [];
  const snapshot = await getDocs(blogsRef);

  snapshot.forEach((doc) => res.push(doc.data()));
  return res;
};

// Get blog by slug
// return: blug content or empty string if not found
const getBlog = async (slug) => {
  let result = "";

  await getDownloadURL(ref(storage, `blogs/${slug}`))
    .then(async (url) => {
      await fetch(url).then(async (res) => {
        result = await res.text();
      });
    })
    .catch((err) => console.log(err));

  return result;
};

export { getChallenge, getBlogs, getBlog };
