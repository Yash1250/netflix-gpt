/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzxw7k9DbDbcBNVaHAKGHti7h91w_1ceU",
  authDomain: "netflix-gpt-28b8d.firebaseapp.com",
  projectId: "netflix-gpt-28b8d",
  storageBucket: "netflix-gpt-28b8d.appspot.com",
  messagingSenderId: "77288429802",
  appId: "1:77288429802:web:14feb66d585419a9f7df93",
  measurementId: "G-3BYW6DXQJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
