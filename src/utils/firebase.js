// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGWQcNDl7W8UK_AjjsaD6-pUS9xFQgICE",
  authDomain: "netflix-ai-6b576.firebaseapp.com",
  projectId: "netflix-ai-6b576",
  storageBucket: "netflix-ai-6b576.firebasestorage.app",
  messagingSenderId: "33082309914",
  appId: "1:33082309914:web:a70ba792ab96f627cb00a3",
  measurementId: "G-BDQPPE335P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);