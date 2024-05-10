// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWA27KeA7t2CE_GAGa403kGPzZHlkBSxM",
  authDomain: "sticky-notes-d3265.firebaseapp.com",
  projectId: "sticky-notes-d3265",
  storageBucket: "sticky-notes-d3265.appspot.com",
  messagingSenderId: "573722632169",
  appId: "1:573722632169:web:102b66a8cec03270993578",
  measurementId: "G-PNTDZTZ3RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
