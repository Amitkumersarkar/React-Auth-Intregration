import { createContext } from "react";

const AuthProvider = ({ children }) => {
    const authContext = createContext(null);
    const authInfo = {
        name: 'abc...',
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;