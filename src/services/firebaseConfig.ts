import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKjaOZOY7AW48FQH6TVDCBiupDY4O4Nb4",
  authDomain: "final-project-auth-f9327.firebaseapp.com",
  projectId: "final-project-auth-f9327",
  storageBucket: "final-project-auth-f9327.appspot.com",
  messagingSenderId: "74498676012",
  appId: "1:74498676012:web:3940057cd96795ab5fc889"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);