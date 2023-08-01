import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA7ISRU3LObQ2AdKXWAxGTAYguGGGzixnM",
    authDomain: process.env.FIRE_DOMAIN,
    projectId: process.env.FIRE_ID,
    storageBucket: process.env.FIRE_BUCKET,
    messagingSenderId: process.env.FIRE_SENDER,
    appId: process.env.FIRE_APP
};

const app = initializeApp(firebaseConfig);

export default app;