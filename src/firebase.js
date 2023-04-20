// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9orkOEhBfe_bCGn1IGip9Hsl48KLY1PA",
  authDomain: "listedassignmentbypankaj.firebaseapp.com",
  projectId: "listedassignmentbypankaj",
  storageBucket: "listedassignmentbypankaj.appspot.com",
  messagingSenderId: "51789309840",
  appId: "1:51789309840:web:ac7cefd7a1fc268b8c7515",
  measurementId: "G-VV25ZC4P7C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
