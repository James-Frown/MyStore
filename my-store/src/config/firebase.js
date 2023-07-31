// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIRE_KEY,
    authDomain: process.env.FIRE_DOMAIN,
    projectId: process.env.FIRE_ID,
    storageBucket: process.env.FIRE_BUCKET,
    messagingSenderId: process.env.FIRE_SENDER,
    appId: process.env.FIRE_APP
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);