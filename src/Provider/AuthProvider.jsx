import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); 
    }


const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}    

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}


useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentuser => {
        setUser(currentuser); 
        setLoading(false);
    })
    return () => {
        unSubscribe(); 
    }
}, [])

    const authInfo = {
         user, 
         createUser,
         signInUser,
         logOut,
         loading
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;