import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAzPGMhzWVmV9FEgPUrMrrwE8hz-WgPKDk",
  authDomain: "form-579cb.firebaseapp.com",
  databaseURL: "https://form-579cb-default-rtdb.firebaseio.com",
  projectId: "form-579cb",
  storageBucket: "form-579cb.appspot.com",
  messagingSenderId: "1086945137767",
  appId: "1:1086945137767:web:1dc2e71223559b336430c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app,auth};