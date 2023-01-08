// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOioL3EpZotakEEdLD8BT5xhs4yQCNmU",
  authDomain: "quick-messenger-ca6ff.firebaseapp.com",
  projectId: "quick-messenger-ca6ff",
  storageBucket: "quick-messenger-ca6ff.appspot.com",
  messagingSenderId: "168288193720",
  appId: "1:168288193720:web:569b86cbeb25308206b84d",
  measurementId: "G-0BT63N87JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);