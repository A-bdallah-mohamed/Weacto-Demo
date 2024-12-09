import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import {getAuth } from 'firebase/auth'
 import { getDatabase } from "firebase/database";
// 1- email authentication
// 2- email verification
// 3- google authentication
// 4- apple authentication 



const firebaseConfig = {
  apiKey: "AIzaSyAQPrVgzWNSHIyXFWqN-8EZ0vCuRfG6yPA",
  authDomain: "weacctt-ef805.firebaseapp.com",
  projectId: "weacctt-ef805",
  storageBucket: "weacctt-ef805.firebasestorage.app",
  messagingSenderId: "453765277678",
  appId: "1:453765277678:web:ae7f051e3308f8ab3550ff",
  measurementId: "G-GPZCCCBWN6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app)