// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f9cb7.firebaseapp.com",
  projectId: "mern-blog-f9cb7",
  storageBucket: "mern-blog-f9cb7.appspot.com",
  messagingSenderId: "37325555263",
  appId: "1:37325555263:web:70bbcb48d7114ec9115a8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);