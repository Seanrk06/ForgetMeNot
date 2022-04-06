import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth} from "./Firebase/firebase";
import app from "./Firebase/firebase";
import {getFirestore, doc, setDoc} from "firebase/firestore";


const userAuthContext = createContext();
const db = getFirestore(app);

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(name, email, password, role) {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        email: email,
        role: role
      });
    //   db.collection("users").doc(userCredential.user.uid).set({
    //     name: name,
    //     email: email,
    //     role: role
    // })
    });
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}