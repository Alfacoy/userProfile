import firebase from "./index";
require("firebase/auth");

const provider = new firebase.auth.GoogleAuthProvider();

export default provider;
