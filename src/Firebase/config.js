import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getDatabase} from "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCy65JsHc4mSFP7xq1W8DwAkZm3YSqE4ok",
    authDomain: "aqua-industry.firebaseapp.com",
    projectId: "aqua-industry",
    storageBucket: "aqua-industry.appspot.com",
    messagingSenderId: "61892807904",
    appId: "1:61892807904:web:3f9a47f067189c4bf49485",
    measurementId: "G-GD62Z71WYS",
    databaseURL:"https://aqua-industry-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };

  //init firebase
const app = initializeApp(firebaseConfig)

//init firestore
const db = getFirestore(app)

// initilize RealTime Database
const database = getDatabase(app)

export{db , database}