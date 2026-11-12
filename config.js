import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB6S84sKvKs0FKhP3JPe1Ys9DIb5bS-zv8",
  authDomain: "todosapp-ad77a.firebaseapp.com",
  projectId: "todosapp-ad77a",
  storageBucket: "todosapp-ad77a.firebasestorage.app",
  messagingSenderId: "272433875594",
  appId: "1:272433875594:web:b3c9b5de9e3ac00ddd7b73",
  measurementId: "G-XLVM7JX7G5",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
