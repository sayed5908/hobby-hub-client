// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHpokgK2U4devohHq0S0IpVzgtMN-_DR8",
  authDomain: "hobby-hub-client-25885.firebaseapp.com",
  projectId: "hobby-hub-client-25885",
  storageBucket: "hobby-hub-client-25885.firebasestorage.app",
  messagingSenderId: "568429620303",
  appId: "1:568429620303:web:bf02238301945a92aa0e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export default app;