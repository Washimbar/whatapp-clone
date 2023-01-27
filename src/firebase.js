// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4C7uhHehXXLFeLe1SwDkQXPulaoOAJcA",
  authDomain: "whatsapp-clone-a0984.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a0984-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-a0984",
  storageBucket: "whatsapp-clone-a0984.appspot.com",
  messagingSenderId: "357582856552",
  appId: "1:357582856552:web:bee0ff7f029e770f3b76dd",
  measurementId: "G-KTWNMR5NSH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;