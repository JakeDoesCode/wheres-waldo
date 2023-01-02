// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB6MYFWAowEXysil-uM5otRzRJtMzGtGkM",

  authDomain: "wheres-waldo-36618.firebaseapp.com",

  projectId: "wheres-waldo-36618",

  storageBucket: "wheres-waldo-36618.appspot.com",

  messagingSenderId: "216940303916",

  appId: "1:216940303916:web:5879b8f28740845eb52389"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Upon clicking start, generate 5 random characters to find and begin time.
// display character img bubble and name
// display time in .time and save personal_best for user
// when player finds one of the correct characters, cross that character off list
// when player finds all 5 characters, stop time, and display the win screen with the final time 
// if final time is lowest, store in personal best.
// win screen will have a try again button which will immediately regen new characters and start time
// and an "I've had enough button which will return user to main screen"
