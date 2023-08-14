import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./registerServiceWorker";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

var config = {
  apiKey: "AIzaSyBLTgQ5YJOP5EHHiw9giqXzbWMMUhyT0Wg",
  authDomain: "react2022b.firebaseapp.com",
  projectId: "react2022b",
  storageBucket: "react2022b.appspot.com",
  messagingSenderId: "853395810250",
  appId: "1:853395810250:web:1bf5bcb7021ddf0a3fd133",
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
