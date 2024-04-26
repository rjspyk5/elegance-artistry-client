import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      setuser(res);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = (email, pass) => {
    loading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logIn = (email, pass) => {
    loading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    loading(true);
    return signOut(auth);
  };

  const userinfo = { signUp, logIn, logOut, user, loading };
  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};
