require('dotenv/config');
const googleAuth = require('google-auth-library');
const axios = require('axios');

(async () => {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const serviceAccountKeyEncoded = process.env.SERVICE_ACCOUNT_KEY;

  const serviceAccountKeyDecoded = JSON.parse(
    Buffer.from(serviceAccountKeyEncoded, 'base64').toString('ascii')
  );

  const jwt = new googleAuth.JWT(
    serviceAccountKeyDecoded.client_email,
    null,
    serviceAccountKeyDecoded.private_key,
    ['https://www.googleapis.com/auth/firebase.messaging'],
    null
  );
  const tokens = await jwt.authorize();
  const authorizationHeader = `Bearer ${tokens.access_token}`;

  try {
    const registrationToken = process.env.REGISTRATION_TOKEN;
    const response = await axios.post(
      `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`,
      {
        message: {
          notification: {
            title: 'Push notification with Firebase',
            body: 'Push notifications with Firebase body',
          },
          webpush: {
            fcmOptions: {
              link: 'http://localhost:3000',
            },
            notification: {
              icon: 'https://picsum.photos/200',
            },
          },
          token: registrationToken,
        },
      },
      {
        headers: {
          Authorization: authorizationHeader,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error?.response?.data?.error);
  }
})();
