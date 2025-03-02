import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Authcontextt = createContext();

const AuthContext = ({children}) => {
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState();

  const createUser = async (email, password, displayName) =>{
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toastSuccess("register işlemi başarılı");
      navigate("/");

      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
    } catch (error) {
      toastError(error.message);
    }
  };


  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("google ile giriş  başarılı");

        navigate("/");
      })
      .catch((error) => {
        toastError("google ile giriş hatalı");
      });
  };





  return (
    <Authcontextt.Provider
    value = {{currentUser,createUser,signInGoogle}}
    >

      {children}
    </Authcontextt.Provider>
    
  )
}

export default AuthContext