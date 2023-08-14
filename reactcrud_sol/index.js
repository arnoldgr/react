import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'bootstrap/dist/css/bootstrap.min.css';
var config = {
  apiKey: "AIzaSyDR5PPUntffQI31Z7RQItKzFpnLymRHfjc",
  authDomain: "react-project-178bd.firebaseapp.com",
  projectId: "react-project-178bd",
  storageBucket: "react-project-178bd.appspot.com",
  messagingSenderId: "524198132407",
  appId: "1:524198132407:web:eef88c96a1c52851146b32",
  measurementId: "G-R70CNC4RSL"
};
firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
