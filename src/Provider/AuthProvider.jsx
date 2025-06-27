import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const name = 'apple';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {
        name,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;