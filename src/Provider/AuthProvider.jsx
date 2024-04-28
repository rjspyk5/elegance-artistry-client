import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
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
  console.log(user);
  const signUp = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const updateInfo = (userr, name, photo) => {
    setloading(true);
    return updateProfile(userr, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleLogIn = () => signInWithPopup(auth, googleProvider);
  const githubLogin = () => signInWithPopup(auth, githubProvider);
  const userinfo = {
    signUp,
    logIn,
    logOut,
    user,
    loading,
    updateInfo,
    googleLogIn,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};
