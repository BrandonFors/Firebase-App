import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgkDUmZ0z_UXOIOcI-oOk0-fS4zMHQHWo",
  authDomain: "first-project-6bf83.firebaseapp.com",
  projectId: "first-project-6bf83",
  storageBucket: "first-project-6bf83.firebasestorage.app",
  messagingSenderId: "804437391105",
  appId: "1:804437391105:web:4e61a253f55dd133298d00",
  measurementId: "G-CY5P97EWMR"
};


//init firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore(app);

export {db};