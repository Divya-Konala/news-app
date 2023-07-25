// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq-of1y9zjTZDfeyc-hsLMSh334lnFv-M",
  authDomain: "news-app-91f9e.firebaseapp.com",
  projectId: "news-app-91f9e",
  storageBucket: "news-app-91f9e.appspot.com",
  messagingSenderId: "31778935390",
  appId: "1:31778935390:web:8bfb251b58cba28d0c9acf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// we use these two objects throughout the application
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
