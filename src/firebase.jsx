// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2-4p_sqzRzUKZTM01FlyN0-xAGGcT1ok',
  authDomain: 'netflix-react-afd20.firebaseapp.com',
  projectId: 'netflix-react-afd20',
  storageBucket: 'netflix-react-afd20.appspot.com',
  messagingSenderId: '462559974189',
  appId:'462559974189:web:0e89e4f24c39aa8356b9a4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app)

