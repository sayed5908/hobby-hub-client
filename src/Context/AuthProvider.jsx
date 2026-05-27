import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

// console.log(user.name);
const logOut = () =>{
    return signOut(auth);
}
// console.log(user?.email);


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        unSubscribe();
    }
},[])


const userInfo = {
    user,
    setUser,
    logOut,
    createUser,
    signInUser,
    loading,
    setLoading
}

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;