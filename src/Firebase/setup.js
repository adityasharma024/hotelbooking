// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyD2gWrnnjqPn4vKkrqntXcJQC4NAloHfb4",
  authDomain: "stay-swift.firebaseapp.com",
  projectId: "stay-swift",
  storageBucket: "stay-swift.appspot.com",
  messagingSenderId: "272382126956",
  appId: "1:272382126956:web:50e3f1c04a84cdf9012149"
};
const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider();
export const database=getFirestore(app);

