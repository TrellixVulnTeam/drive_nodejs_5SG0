var firebase = require('firebase');
require('firebase/auth');

var config = {
    apiKey: "AIzaSyCZAKwAQNkBed1tqss0qcepaX2koH1XSss",
    authDomain: "digitaladvertisemntsviewdata.firebaseapp.com",
    databaseURL: "https://digitaladvertisemntsviewdata.firebaseio.com",
    projectId: "digitaladvertisemntsviewdata",
    storageBucket: "digitaladvertisemntsviewdata.appspot.com",
    messagingSenderId: "1075588574618"
  };

var app = firebase.initializeApp(config);
var db = firebase.firestore();

