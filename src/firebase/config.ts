import { initializeApp, getApp, type FirebaseApp } from "firebase/app";

// TODO: Replace with your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
let app: FirebaseApp;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(firebaseConfig);
}

export { app };
