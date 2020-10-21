This react app is deployed on Firebase and using Firebase cloud messaging for notifications.


## Steps:

	1. Go to Fireabase console and create a cloud messaging type app in firebase and copy the credentials.
	2. Create a file in src folder named firebase.js and paste the configs of your firebase app and firebase.initialiazeApp
	3. In app.js get the token from firebase.messaging
	4. Create a service worker file with the name of 'firebase-messaging-sw.js' inside public folder and do this
	'''
  importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js')
	importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js')
	firebase.initializeApp({
	  apiKey: "************",
	  authDomain: "fir-messaging-9f9e0.firebaseapp.com",
	  databaseURL: "https://fir-messaging-9f9e0.firebaseio.com",
	  projectId: "fir-messaging-9f9e0",
	  storageBucket: "fir-messaging-9f9e0.appspot.com",
	  messagingSenderId: "**********",
	  appId: "1:**********" 
	})
firebase.messaging();
'''



## Here is the [Tutorial](https://dzone.com/articles/react-apps-firebase) on how to deploy react app on Firebase