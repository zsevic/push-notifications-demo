import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config';
import '../styles/globals.css';

initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
