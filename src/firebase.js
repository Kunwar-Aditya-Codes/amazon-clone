import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBt3avxQ9GMoB3IHl5NvtBneCy2JqcDwko',
  authDomain: 'clone-a-m-a-z-o-n.firebaseapp.com',
  projectId: 'clone-a-m-a-z-o-n',
  storageBucket: 'clone-a-m-a-z-o-n.appspot.com',
  messagingSenderId: '742510579349',
  appId: '1:742510579349:web:82350357be96d22096d59c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
