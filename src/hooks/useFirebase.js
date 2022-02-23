import { useState, useEffect } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = (from, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            setLoading(false);
        });
    }, [auth]);

    return {
        user,
        error,
        loading,
        handleGoogleSignIn,
        handleSignOut,
    };
};

export default useFirebase;
