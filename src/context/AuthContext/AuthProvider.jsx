import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    

    // get current user info
    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('inside if', currentUser)
    //     } else {
    //         console.log('inside else', currentUser)
    //     }

    useEffect(()=> {
        //set the observer on mount
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('current user in auth state change', currentUser)
            setUser(currentUser) 
            setLoading(false)           
        })
        //clear the observer on unmount
        return ()=> {
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
    }
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;