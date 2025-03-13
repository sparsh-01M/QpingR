// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaitjm5R5BfuyHcc1t9Tjnb5IHIBf6Rd0",
    authDomain: "qpingr-ca8c9.firebaseapp.com",
    projectId: "qpingr-ca8c9",
    storageBucket: "qpingr-ca8c9.firebasestorage.app",
    messagingSenderId: "834852827199",
    appId: "1:834852827199:web:1fa5aa682c2e018c9e888a",
    measurementId: "G-5MKQK81H4V"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();