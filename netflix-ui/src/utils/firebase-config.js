import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBLI3uJ-mPueL-cAB1f4mO2ndIdyEazflY",
  authDomain: "netflix-api-712ca.firebaseapp.com",
  projectId: "netflix-api-712ca",
  storageBucket: "netflix-api-712ca.appspot.com",
  messagingSenderId: "576020725834",
  appId: "1:576020725834:web:ace8c84db36ed9c1f5e6b3",
  measurementId: "G-1TRK9DP2ZJ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);