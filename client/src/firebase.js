// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-43e97.firebaseapp.com",
  projectId: "mern-auth-43e97",
  storageBucket: "mern-auth-43e97.appspot.com",
  messagingSenderId: "1076489810557",
  appId: "1:1076489810557:web:bb2a2b7459eb2deea67714"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);