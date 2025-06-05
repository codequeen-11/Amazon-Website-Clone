 // FireBase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-DUvYb8sZwxAOw0I3MxTfemwejJL80qQ",
  authDomain: "clone-8b9d1.firebaseapp.com",
  projectId: "clone-8b9d1",
  storageBucket: "clone-8b9d1.appspot.com",
  messagingSenderId: "711689648545",
  appId: "1:711689648545:web:d42f9238f62ec08f5373e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

