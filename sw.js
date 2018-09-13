// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
    apiKey: "AIzaSyD6QZLNLqIAzdh83jHAFLDUgkKjlh4f1vE",
    authDomain: "chatroom-e7870.firebaseapp.com",
    databaseURL: "https://chatroom-e7870.firebaseio.com",
    projectId: "chatroom-e7870",
    storageBucket: "chatroom-e7870.appspot.com",
    messagingSenderId: "324350719559"
  };
  firebase.initializeApp(config);
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();









messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Do you AJAX request here.

  // Customize and show your notification
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    click_action: payload.data.click_action
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

