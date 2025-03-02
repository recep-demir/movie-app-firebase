import React, { createContext, useState } from 'react'


export const AuthContextt = createContext()

const AuthContext = ({children}) => {
  const [currentUser,setCurrentUser] =useState()

  return (
    <AuthContextt.Provider value = {{currentUser}}>
      {children}
    </AuthContextt.Provider>
  )
}

export default AuthContext