import firebase from "firebase/compat/app";

import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvA5OJiWW-zhEUW2Vd99y003dpR-B2mbY",
  authDomain: "estates-storage.firebaseapp.com",
  projectId: "estates-storage",
  storageBucket: "estates-storage.appspot.com",
  messagingSenderId: "153434090323",
  appId: "1:153434090323:web:513922e28014d98adbcfa6",
  measurementId: "G-XF3F38J1P6"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage, firebase as default}