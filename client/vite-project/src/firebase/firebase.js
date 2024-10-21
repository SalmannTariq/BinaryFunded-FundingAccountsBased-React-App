// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu-1JhdH6N8j6WmwmLZIKLr2Van4BDVvs",
  authDomain: "binaryfunded-bad85.firebaseapp.com",
  databaseURL: "https://binaryfunded-bad85-default-rtdb.firebaseio.com",
  projectId: "binaryfunded-bad85",
  storageBucket: "binaryfunded-bad85.appspot.com",
  messagingSenderId: "69629695151",
  appId: "1:69629695151:web:9b77e80c0c83fe9f1bf05a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};