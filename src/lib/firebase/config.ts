// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// SHOULD BE PULLED OUT INTO .ENV
const firebaseConfig = {
  apiKey: "AIzaSyCMES4DvGQbBVb_FvE9lEwigYQ6E13HiO0",
  authDomain: "first-firebase-project-3a028.firebaseapp.com",
  projectId: "first-firebase-project-3a028",
  storageBucket: "first-firebase-project-3a028.appspot.com",
  messagingSenderId: "662897517556",
  appId: "1:662897517556:web:589cee64f5f35434d90fa1",
  measurementId: "G-SW1K2YS0VJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
