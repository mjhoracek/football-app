import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAVQQnYy4kYbtvqyB2yE8oP7-cNf7ao6g8',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}


const app = () => {
    if (!firebase.apps.length) {
        return firebase.initializeApp(firebaseConfig)
    }
}


export default app