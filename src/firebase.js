import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyB_H14P12a4Iz_xcJayXORJc2KXYayaNtY",
    authDomain: "disneyplus-clone-8ed1c.firebaseapp.com",
    projectId: "disneyplus-clone-8ed1c",
    storageBucket: "disneyplus-clone-8ed1c.appspot.com",
    messagingSenderId: "74772509698",
    appId: "1:74772509698:web:ab64af8e010403ed55631b",
    measurementId: "G-490XGYTZTP"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {auth,provider,storage};
  export default db;
  