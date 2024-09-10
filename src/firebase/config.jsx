import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnTMiOme52ImvLLwyvguL7_liEHrd02Kc",
  authDomain: "miniblog-a73c5.firebaseapp.com",
  projectId: "miniblog-a73c5",
  storageBucket: "miniblog-a73c5.appspot.com",
  messagingSenderId: "929063600350",
  appId: "1:929063600350:web:a271a59f7048e2dba4c24f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }