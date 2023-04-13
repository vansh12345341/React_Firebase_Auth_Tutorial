import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5xuaRIkdAhXg6Tkv107AU_i1NbWG-8zM",
  authDomain: "dsas-b708e.firebaseapp.com",
  projectId: "dsas-b708e",
  storageBucket: "dsas-b708e.appspot.com",
  messagingSenderId: "538741220696",
  appId: "1:538741220696:web:00da557e7b46d5980f312d",
  measurementId: "G-Z46CQ9WNJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
