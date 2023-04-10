import { getMessaging, getToken } from 'firebase/messaging';

export const getTokenForPushNotifications = async () => {
  const messaging = getMessaging();
  const token = await getToken(messaging, {
    vapidKey: process.env.REACT_APP_VAPID_KEY,
  });
  return token;
}
