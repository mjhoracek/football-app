import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// const firebaseConfig = {
//     apiKey: "AIzaSyAVQQnYy4kYbtvqyB2yE8oP7-cNf7ao6g8",
//     authDomain: "auth-development-d02f2.firebaseapp.com",
//     projectId: "auth-development-d02f2",
//     storageBucket: "auth-development-d02f2.appspot.com",
//     messagingSenderId: "889983200397",
//     appId: "1:889983200397:web:3ed2bfe79d010b2b3346c4"
// }

let instance

export default function getFirebase() {
    if (typeof window !== "undefined") {
        if (instance) return instance
        instance = firebase.initializeApp(firebaseConfig);
        return instance
    }

    return null
}



