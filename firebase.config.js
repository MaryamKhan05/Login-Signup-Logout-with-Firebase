import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD9RAB_F3ik2m7Dv5pqILHQab_c03YdDg",
  authDomain: "authentication-93880.firebaseapp.com",
  projectId: "authentication-93880",
  storageBucket: "authentication-93880.appspot.com",
  messagingSenderId: "510494450076",
  appId: "1:510494450076:web:7d4d4e09e2125b68d0a859",
  measurementId: "G-W9TMQDQLJH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
