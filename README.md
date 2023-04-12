# push-notifications-demo

> Full-stack demo for [Push notifications with Firebase](https://sevic.dev/notes/push-notifications-firebase/) post

## Setup

### Front-end

- Update Firebase configuration in `src/config.js` and `public/firebase-messaging-sw.js` files

- Run the following commands

```bash
cp .env.sample .env.local # change values after copying
npm i
npm run dev
```

- Open the page, allow notifications and get registration token from the console log

### Back-end

- Run the following commands to publish a push notification

```bash
cp .env.sample .env # change values after copying
npm i
node index.js
```
