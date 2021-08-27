import firebase from 'firebase/app'
import app from './index'

app()

const auth = firebase.auth()

export const getToken = async () => {
    const result = await auth.currentUser.getIdToken()
    return result
}