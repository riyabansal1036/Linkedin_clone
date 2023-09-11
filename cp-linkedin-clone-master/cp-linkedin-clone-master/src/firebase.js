import firebase from "firebase";
// import firebase from './firebase';
// import db from './firebase';

// import 'firebase/auth';
// import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDKeusl87om1qoGoWz4CZK2HKMkXDdxTkg",
    authDomain: "linkedln-clone-9ca5f.firebaseapp.com",
    projectId: "linkedln-clone-9ca5f",
    storageBucket: "linkedln-clone-9ca5f.appspot.com",
    messagingSenderId: "39235696468",
    appId: "1:39235696468:web:959c03a71825f4da6bfac1"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {auth,provider, storage};
  export default db;
// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// const firestore = firebaseApp.firestore();

// export { auth, firestore,provider };