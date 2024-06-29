import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASzPJJOSHAhnYFKtLyU3GVMWuaZ2WedWg",
    authDomain: "businessportfolio-c2c42.firebaseapp.com",
    projectId: "businessportfolio-c2c42",
    storageBucket: "businessportfolio-c2c42.appspot.com",
    messagingSenderId: "654085128292",
    appId: "1:654085128292:web:6417514ec3ce273b259f71",
    measurementId: "G-ZVZRN0RBP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyASzPJJOSHAhnYFKtLyU3GVMWuaZ2WedWg",
//     authDomain: "businessportfolio-c2c42.firebaseapp.com",
//     projectId: "businessportfolio-c2c42",
//     storageBucket: "businessportfolio-c2c42.appspot.com",
//     messagingSenderId: "654085128292",
//     appId: "1:654085128292:web:6417514ec3ce273b259f71",
//     measurementId: "G-ZVZRN0RBP2"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
// const db = firebase.firestore();
// export { firebase, db };