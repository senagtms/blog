import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmHRV0Z8I17OkDeJ-mmhwIVfd1wDZIrEI",
  authDomain: "vue3-firebase-a7ac7.firebaseapp.com",
  projectId: "vue3-firebase-a7ac7",
  storageBucket: "vue3-firebase-a7ac7.appspot.com",
  messagingSenderId: "840419158146",
  appId: "1:840419158146:web:b7ccda028c12b8e0afec9b"
};

  const Firebase= firebase.initializeApp(firebaseConfig);

  const firestoreRef= Firebase.firestore();

  export {firestoreRef}