import React from 'react';
import './App.css';
import firebase from './firebase'

function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken();
  }).then((token) => {
    prompt('token: ', token);
    console.log('token: ', token);
  })

  return (
      <h2>Hello world</h2>
  );
}

export default App;
