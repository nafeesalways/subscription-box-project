import React, { createContext, useEffect, useState } from 'react';
import { app } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]  = useState(null);
    const [loading,setLoading]= useState(true)
    const createUser =(email,password)=>{
        setLoading(true);
           return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(updatedData)=>{
return updateProfile(auth.currentUser,updatedData)
    }

    useEffect((()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    }),[])
    console.log(user)
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
        auth,
        googleSignIn 
    }
    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;