import firebase from 'firebase'


const config = {
  apiKey: "AIzaSyAksGx8xmxzbCqhyZkrpqPiqEXmQ-9d_QM",
  authDomain: "fir-messaging-9f9e0.firebaseapp.com",
  databaseURL: "https://fir-messaging-9f9e0.firebaseio.com",
  projectId: "fir-messaging-9f9e0",
  storageBucket: "fir-messaging-9f9e0.appspot.com",
  messagingSenderId: "808864221146",
  appId: "1:808864221146:web:1c7082056bd3594c58e2e3"
}


firebase.initializeApp(config)

export default firebase