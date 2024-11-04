import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQPrVgzWNSHIyXFWqN-8EZ0vCuRfG6yPA",
  authDomain: "weacctt-ef805.firebaseapp.com",
  projectId: "weacctt-ef805",
  storageBucket: "weacctt-ef805.firebasestorage.app",
  messagingSenderId: "453765277678",
  appId: "1:453765277678:web:ae7f051e3308f8ab3550ff",
  measurementId: "G-GPZCCCBWN6"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
