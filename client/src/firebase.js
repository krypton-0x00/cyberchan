import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cyber-chan.firebaseapp.com",
  projectId: "cyber-chan",
  storageBucket: "cyber-chan.appspot.com",
  messagingSenderId: "612814996",
  appId: "1:612814996:web:c4232e779e0c04639be481",
};

//export default firebase configuration
export const app = initializeApp(firebaseConfig);
