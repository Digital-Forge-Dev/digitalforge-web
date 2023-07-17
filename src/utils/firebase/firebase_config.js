// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, deleteApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5D8Aae63Zhna8LpeoRlgAqRUa6J-dwOI",
  authDomain: "digitalforge-web.firebaseapp.com",
  projectId: "digitalforge-web",
  storageBucket: "digitalforge-web.appspot.com",
  messagingSenderId: "586849387627",
  appId: "1:586849387627:web:67f40b17746656b71a9d2e",
  measurementId: "G-YMY1HD2MEW"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
