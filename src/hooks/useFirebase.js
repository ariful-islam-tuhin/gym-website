
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseInitialize";
import UseServices from "../Pages/Home/UseServices/UseServices";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [services] = UseServices();
    const auth = getAuth()
    const [isLoading, setIsLoading] = useState(true);


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change 

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        services,
        isLoading
    }
}

export default useFirebase;