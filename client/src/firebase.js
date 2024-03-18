// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// since we are using vite app we need to use import.meta.env.asif to access dotenv variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-fe16d.firebaseapp.com",
    projectId: "mern-blog-fe16d",
    storageBucket: "mern-blog-fe16d.appspot.com",
    messagingSenderId: "9922857445",
    appId: "1:9922857445:web:d50da7125cb36c31bf070c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);