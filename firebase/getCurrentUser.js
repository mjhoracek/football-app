import firebase from 'firebase/app'
import app from './index'

app()

const auth = firebase.auth()

export const getCurrentUser = () => {
    return auth.currentUser
}