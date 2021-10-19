import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

import initializeAuthentication from "../firebase/firebase.init"




initializeAuthentication();
const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const GoogleProvider = new GoogleAuthProvider();


    const auth = getAuth();


    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }

    const handleRegistration = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }
    const handleGoogleSigin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return {
        handleRegistration,
        handlePasswordChange,
        handleEmailChange,
        handleGoogleSigin
    }



}

export default useFirebase;