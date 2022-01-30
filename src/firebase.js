import { getDatabase } from "firebase/database"; 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu0Lzj2DBD800ORF1i7kLfuKgC_nF5pnM",
  authDomain: "todo-firebase-5f005.firebaseapp.com",
  databaseURL: "https://todo-firebase-5f005-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-firebase-5f005",
  storageBucket: "todo-firebase-5f005.appspot.com",
  messagingSenderId: "520742008862",
  appId: "1:520742008862:web:52661e7b62af0bd09f960f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();