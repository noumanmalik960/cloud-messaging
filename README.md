This react app is deployed on Firebase and using Firebase cloud messaging for notifications.
This app is deployed [here](https://fir-messaging-9f9e0.web.app/)


## Steps:

1. Go to Fireabase console and create a cloud messaging type app in firebase and copy the credentials.
2. Create a file in src folder named firebase.js and paste the configs of your firebase app and firebase.initialiazeApp
3. In app.js get the token from firebase.messaging
4. Create a service worker file with the name of 'firebase-messaging-sw.js' inside public folder and the code(added in repo)
5. On opening demo link of this app it will give us the messaging token of the device, that we can test in Firebase by sending test messages


## Here is the [Tutorial](https://dzone.com/articles/react-apps-firebase) on how to deploy react app on Firebase
