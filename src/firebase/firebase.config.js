// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnPY4NXq_060re2bPr0zjdBkwgcpEspOE",
    authDomain: "coffee-store-158e8.firebaseapp.com",
    projectId: "coffee-store-158e8",
    storageBucket: "coffee-store-158e8.appspot.com",
    messagingSenderId: "739054917274",
    appId: "1:739054917274:web:687729248798fae5953123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth