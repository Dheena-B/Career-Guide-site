import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH2BT6RGBez4FRwymYrQ-vMaW6fT8VqrA",
  authDomain: "dheena-coder.firebaseapp.com",
  projectId: "dheena-coder",
  storageBucket: "dheena-coder.firebasestorage.app",
  messagingSenderId: "898140506399",
  appId: "1:898140506399:web:591483ff6b381ffc91082a",
  measurementId: "G-LQLQJVWG51"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);