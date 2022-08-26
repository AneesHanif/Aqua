import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCy65JsHc4mSFP7xq1W8DwAkZm3YSqE4ok",
    authDomain: "aqua-industry.firebaseapp.com",
    projectId: "aqua-industry",
    storageBucket: "aqua-industry.appspot.com",
    messagingSenderId: "61892807904",
    appId: "1:61892807904:web:3f9a47f067189c4bf49485",
    measurementId: "G-GD62Z71WYS"
  };

  //init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

export{db}