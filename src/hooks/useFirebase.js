import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

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
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    }
    const handleGoogleSigin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])




    return {
        handleRegistration,
        handlePasswordChange,
        handleEmailChange,
        handleGoogleSigin,
        handleLogout,
        handleLogin,
        user,
        error
    }



}

export default useFirebase;