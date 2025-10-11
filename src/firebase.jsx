// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6DLpEsLymGiAeZLsZWj612IlpNE_U-Qs",
  authDomain: "emailcamp-bc236.firebaseapp.com",
  projectId: "emailcamp-bc236",
  storageBucket: "emailcamp-bc236.firebasestorage.app",
  messagingSenderId: "667457925457",
  appId: "1:667457925457:web:f7e47ed61885c215eae370"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
