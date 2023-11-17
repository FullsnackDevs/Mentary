import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwxgaFxkG8W8j6MANmCzj6eyaMfY5emBw",
    authDomain: "mentary-d9f59.firebaseapp.com",
    projectId: "mentary-d9f59",
    storageBucket: "mentary-d9f59.appspot.com",
    messagingSenderId: "173459314571",
    appId: "1:173459314571:web:fc33942c1a7aaa62ee818e",
    measurementId: "G-W3G5ZN8EG6"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);