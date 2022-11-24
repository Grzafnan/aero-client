import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const updateUserProfile = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
    })
  }

  const verify = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])


  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    verify,
    signInWithGoogle,
    loading,
    setLoading,

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;