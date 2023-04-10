/* eslint-disable no-unused-vars */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const DEFAULT_URL = 'https://www.flat-me.com';
  const url =
    event.notification?.data?.FCM_MSG?.notification?.click_action ||
    DEFAULT_URL;
  console.log('url', url);
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientsArray) => {
      const hadWindowToFocus = clientsArray.some((windowClient) =>
        windowClient.url === url ? (windowClient.focus(), true) : false
      );
      if (!hadWindowToFocus)
        clients
          .openWindow(url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
    })
  );
});

importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
});

const messaging = firebase.messaging();
