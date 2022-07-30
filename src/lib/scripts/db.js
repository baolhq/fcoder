import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
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
