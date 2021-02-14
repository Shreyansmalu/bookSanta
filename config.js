import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCLSeve1mWAa6BD3yP1VgyE1-huMeyLcwU",
  authDomain: "book-santa-app-90184.firebaseapp.com",
  databaseURL: "https://book-santa-app-90184.firebaseio.com",
  projectId: "book-santa-app-90184",
  storageBucket: "book-santa-app-90184.appspot.com",
  messagingSenderId: "606152651491",
  appId: "1:606152651491:web:1c82bd766b86fc31868bd6"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
