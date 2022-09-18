import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCWSmA96Sk21nZHqPy3_gHyLWNaoxIl73w",
  authDomain: "auth-47807.firebaseapp.com",
  projectId: "auth-47807",
  storageBucket: "auth-47807.appspot.com",
  messagingSenderId: "225419814723",
  appId: "1:225419814723:web:8f632014243bc0f9e9f1f6"
};

// const firebaseConfig = {
//   apiKey: process.env.VITE_FIREBASE_API_KEY,
//   authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_FIREBASE_APP_ID,
// };

const app = initializeApp(firebaseConfig);