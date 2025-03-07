import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDk0aMqMGfXcr5hqK-BVrSFAMjWc2kYMAc",
    authDomain: "lapsa-ai.firebaseapp.com",
    projectId: "lapsa-ai",
    storageBucket: "lapsa-ai.firebasestorage.app",
    messagingSenderId: "88996239576",
    appId: "88996239576:web:4218436b28297355211fad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };