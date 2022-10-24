// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgW-ll4mILJjbh9nH6OQtdasEqEsWR1B8",
  authDomain: "students-room-f9ef1.firebaseapp.com",
  projectId: "students-room-f9ef1",
  storageBucket: "students-room-f9ef1.appspot.com",
  messagingSenderId: "104093742157",
  appId: "1:104093742157:web:25e24346ca2b60d4e1d804",
  measurementId: "G-251888T02J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
