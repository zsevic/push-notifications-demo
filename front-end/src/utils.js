import { getMessaging, getToken } from 'firebase/messaging';

export const getTokenForPushNotifications = async () => {
  const messaging = getMessaging();
  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
  });
  return token;
}
