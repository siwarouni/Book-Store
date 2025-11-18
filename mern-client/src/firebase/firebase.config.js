// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVHOLa2C6Ygzu2N2GKZHj8vWfPgr_lMg",
  authDomain: "mern-book-inventory-14461.firebaseapp.com",
  projectId: "mern-book-inventory-14461",
  storageBucket: "mern-book-inventory-14461.firebasestorage.app",
  messagingSenderId: "935851349573",
  appId: "1:935851349573:web:ac3cdf16b2df819511752c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;