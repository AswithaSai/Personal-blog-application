// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-292e6.firebaseapp.com",
  projectId: "mern-blog-292e6",
  storageBucket: "mern-blog-292e6.firebasestorage.app",
  messagingSenderId: "911968111",
  appId: "1:911968111:web:f28a1bcc2c377133880a9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);