// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIlIybQuUeweytvzQIEf74R-7gAz-RqXg",
  authDomain: "yourmart-dfd65.firebaseapp.com",
  projectId: "yourmart-dfd65",
  storageBucket: "yourmart-dfd65.appspot.com",
  messagingSenderId: "376393856322",
  appId: "1:376393856322:web:d8ec6a771b8e08db8bc4db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();