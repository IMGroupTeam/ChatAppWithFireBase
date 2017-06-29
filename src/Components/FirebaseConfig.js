import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyAuD3Fkq5Y6BRb2cq3LxQHXx9F-XaIG_AI",
   authDomain: "fir-tododemorn.firebaseapp.com",
   databaseURL: "https://fir-tododemorn.firebaseio.com",
   projectId: "fir-tododemorn",
   storageBucket: "fir-tododemorn.appspot.com",
   messagingSenderId: "128776306786"
};

export const firebaseRef = firebase.initializeApp(config);

// Use: import {firebaseRef} from './FirebaseConfig';
