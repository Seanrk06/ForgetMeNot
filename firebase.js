// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-R09VkjUXihyEYP6fY6gHAMIvzJ2wWSI",
  authDomain: "forgetmenot-22106.firebaseapp.com",
  projectId: "forgetmenot-22106",
  storageBucket: "forgetmenot-22106.appspot.com",
  messagingSenderId: "616340791825",
  appId: "1:616340791825:web:8366960c8a403e105e07b0",
  measurementId: "G-WFQG8N9385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);