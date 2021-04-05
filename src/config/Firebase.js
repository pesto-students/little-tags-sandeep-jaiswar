import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFeSVcxdz1-nhV5piS7rCOD3loSA6lI9M",
  authDomain: "nishadya.firebaseapp.com",
  projectId: "nishadya",
  storageBucket: "nishadya.appspot.com",
  messagingSenderId: "65611510898",
  appId: "1:65611510898:web:62923519f90a9462973eeb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;