import React from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';

const LoginManager = () => {
     // Initialize Firebase
     if (firebase.apps.length === 0) {
         firebase.initializeApp(firebaseConfig);
     }
    return (
        <div>
            
        </div>
    );
};

export default LoginManager;