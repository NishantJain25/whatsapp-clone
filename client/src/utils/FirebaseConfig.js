import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6UPEmmT6wJWExtGhsB8ajTYzQX8P566Y",
    authDomain: "whatsapp-clone-cc62f.firebaseapp.com",
    projectId: "whatsapp-clone-cc62f",
    storageBucket: "whatsapp-clone-cc62f.appspot.com",
    messagingSenderId: "622393759897",
    appId: "1:622393759897:web:6acad0e4fbd2751042c008",
    measurementId: "G-D6DY8VHZQL"
  };


const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
