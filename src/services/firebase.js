// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt3J-NuNeSSf8DlPyZfKHsjEdmC6iD6KU",
  authDomain: "invoiceapp-9d13c.firebaseapp.com",
  projectId: "invoiceapp-9d13c",
  storageBucket: "invoiceapp-9d13c.appspot.com",
  messagingSenderId: "100733824249",
  appId: "1:100733824249:web:10e454168efe53a3f68628",
  measurementId: "G-C5KRC20735",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };
