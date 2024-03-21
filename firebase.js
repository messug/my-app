// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFruA5aXUeRVBTEtFS7kmlT10irxrVTDE",
  authDomain: "videocall-8d065.firebaseapp.com",
  projectId: "videocall-8d065",
  storageBucket: "videocall-8d065.appspot.com",
  messagingSenderId: "929861867699",
  appId: "1:929861867699:web:70723317a23c001f68b8c6",
  measurementId: "G-RB8676MTHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
