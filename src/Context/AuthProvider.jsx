import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';


const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

const userInfo = {
    createUser,
    signInUser
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;