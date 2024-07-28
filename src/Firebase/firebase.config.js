
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBWORenNeJtJFRRWPKgwYYnNQv6nOSb2E",
  authDomain: "auth-moha-milon-26f02.firebaseapp.com",
  projectId: "auth-moha-milon-26f02",
  storageBucket: "auth-moha-milon-26f02.appspot.com",
  messagingSenderId: "120259114315",
  appId: "1:120259114315:web:ddac0bb3405ebb1127a4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 