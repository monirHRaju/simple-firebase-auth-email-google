// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0rRDc409h09BYIEG8gpasShmKGl1FIrY",
  authDomain: "simple-firebase-auth-mhraju.firebaseapp.com",
  projectId: "simple-firebase-auth-mhraju",
  storageBucket: "simple-firebase-auth-mhraju.firebasestorage.app",
  messagingSenderId: "177506138127",
  appId: "1:177506138127:web:8a93aabcfac8a76c3c8b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
