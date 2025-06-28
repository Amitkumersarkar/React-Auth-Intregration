import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const name = 'apple';

    // use in signup page
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // use in login page
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const LogOutUser = () => {
        return signOut(auth);
    }

    // set observer
    // onAuthStateChanged(auth, currentUser => {
    //     if (currentUser) {
    //         console.log('Currently logged user', currentUser)
    //         setUser(currentUser);
    //     }
    //     else {
    //         console.log('No user logged in');
    //         setUser(null);
    //     }
    // })

    // using useEffect method

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }

    }, [])




    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        LogOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;