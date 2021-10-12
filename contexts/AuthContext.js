import React, { useContext, useState, useEffect } from "react"
import firebase from "firebase/app"
import app from '../firebase/index.js'
import { getPlayerObject } from '../api/getPlayerObject'
import {useDispatch} from 'react-redux'
import {setPlayerObject} from '../redux/playerObjectSlice'

app()

const auth = firebase.auth()

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError ] = useState('')
  const dispatch = useDispatch()
  
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      
      const fetchPlayerObject = async () => {
        const object = await getPlayerObject()
        dispatch(setPlayerObject(object?.data[0]))
      }
  
      fetchPlayerObject()
      
      setLoading(false)
    })
    
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    setCurrentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    error,
    setError,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
