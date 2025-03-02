import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userTakip();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      toastSuccess("register işlemi başarılı");

      navigate("/");

    
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
    } catch (error) {
      toastError(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toastSuccess("login işlemi başarılı");

      navigate("/");
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

  const cikis = () => {
    signOut(auth);
    toastSuccess("logout başarılı");
  };

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder.login ile bilgiler gelir bizde burada currentUser ın içine atarız, signout olunca bilgiler gider bizde currentUser ın içini güncelleriz (register ve logindeki email vs ye navbardan ulaşabilmek için). google ile giriş yapınca user ile displayname gelir ama email ile girecekseniz en üstte update kodunu firebase den çağırmalısınız.(userObserver)
  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;

        setCurrentUser({
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <AuthContextt.Provider
      value={{ createUser, signIn, signInGoogle, cikis, currentUser }}
    >
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
