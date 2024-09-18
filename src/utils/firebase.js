// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04t53p0e47F_flheJ30e2zOeDl86vu4A",
  authDomain: "netflixgpt-91b63.firebaseapp.com",
  projectId: "netflixgpt-91b63",
  storageBucket: "netflixgpt-91b63.appspot.com",
  messagingSenderId: "182214835800",
  appId: "1:182214835800:web:f560a6f28f0ba979e5d42d",
  measurementId: "G-W7D8MJB6BT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
