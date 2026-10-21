// Firebase Console > Project settings > Your apps > SDK setup and configuration
// Replace every placeholder with your Firebase project's web app configuration.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Paste the Firebase Authentication user's UID(s) allowed to edit lessons.
// Find a UID in Firebase Console > Authentication > Users.
// Firestore rules must use the same UID(s); this client list is only for UI visibility.
export const adminUids = ["YOUR_ADMIN_AUTH_UID"];
