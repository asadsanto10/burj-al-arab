import React, { useContext } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { userContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handelGooleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email: email};
            setLoggedInUser(signInUser)
        }).catch(error => {
            console.log(error);
            console.log(error.message);
        });
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handelGooleLogin}>Goole Login</button>
        </div>
    );
};

export default Login;