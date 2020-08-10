const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB8O8fsFVhQA2K770LUQItcwO95YMJU5Hw",
  authDomain: "pa-compaltil.firebaseapp.com",
  databaseURL: "https://pa-compaltil.firebaseio.com",
  projectId: "pa-compaltil",
  storageBucket: "pa-compaltil.appspot.com",
  messagingSenderId: "811369161764",
  appId: "1:811369161764:web:f1ef296d8ca8993268e4b1",
  measurementId: "G-2YYYR68ET7",
};

firebase.initializeApp(firebaseConfig);
