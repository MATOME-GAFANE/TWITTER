// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v1-6a79c.firebaseapp.com",
  projectId: "twitter-v1-6a79c",
  storageBucket: "twitter-v1-6a79c.appspot.com",
  messagingSenderId: "817496037935",
  appId: "1:817496037935:web:20500d0776dc0e04c144da"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db ,storage};