// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyClc7E0LFpxFxiGKJJoksqCFTj9Sdc793M",
  authDomain: "k-s-shop.firebaseapp.com",
  projectId: "k-s-shop",
  storageBucket: "k-s-shop.appspot.com",
  messagingSenderId: "239416742207",
  appId: "1:239416742207:web:4a21a95d4a38b9e779c38a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app