import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBanddKcfmVxhEfoq0yJLl3eeomayzXaV8",
  authDomain: "firestore-96777.firebaseapp.com",
  projectId: "firestore-96777",
  storageBucket: "firestore-96777.appspot.com",
  messagingSenderId: "1072263157523",
  appId: "1:1072263157523:web:b561698078637c151cece6",
  measurementId: "G-5L1KV4M0ZQ",
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export {
  storage, firestore as default
}