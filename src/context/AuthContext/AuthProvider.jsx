import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
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
        })
        //clear the observer on unmount
        return ()=> {
            unsubscribe()
        }
    },[])

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;