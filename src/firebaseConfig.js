import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC662mr4kJp03r5fAHlf6C6Lp_Hw-8aD5Q",
    authDomain: "whack-a-mole-ptrysinski.firebaseapp.com",
    databaseURL: "https://whack-a-mole-ptrysinski.firebaseio.com",
    projectId: "whack-a-mole-ptrysinski",
    storageBucket: "whack-a-mole-ptrysinski.appspot.com",
    messagingSenderId: "880692680749"
}

firebase.initializeApp(config)

export const database = firebase.database()