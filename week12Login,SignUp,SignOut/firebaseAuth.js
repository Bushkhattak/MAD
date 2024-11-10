// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiMLJOTbQIjmOqPcGjR9BVfTW_XUtwnZI",
    authDomain: "mad-cs-firebase-auth.firebaseapp.com",
    projectId: "mad-cs-firebase-auth",
    storageBucket: "mad-cs-firebase-auth.firebasestorage.app",
    messagingSenderId: "304154860616",
    appId: "1:304154860616:web:4a6da80a2815588e5b8c7d"
  };
  
// Initialize Firebase app if it hasn't been initialized already
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
