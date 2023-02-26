// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9dQKmcHmBc79W-n3knSpr85wQ_Y_FMhs",
  authDomain: "clone-two-da797.firebaseapp.com",
  projectId: "clone-two-da797",
  storageBucket: "clone-two-da797.appspot.com",
  messagingSenderId: "837322083697",
  appId: "1:837322083697:web:26feb76c6fcabd25b87ad0",
  measurementId: "G-18S0T8959P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);