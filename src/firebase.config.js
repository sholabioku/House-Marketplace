// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQrawABENPkMynGZS4VSAaW5tZmIwhOLU',
  authDomain: 'house-marketplace-app-4923e.firebaseapp.com',
  projectId: 'house-marketplace-app-4923e',
  storageBucket: 'house-marketplace-app-4923e.appspot.com',
  messagingSenderId: '640810987515',
  appId: '1:640810987515:web:d4609aba7cc882610ba55e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
