import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDBX_eEPGejJ_fSCe7VdAdli3y_s5N1Oqo",
    authDomain: "boni-28f63.firebaseapp.com",
    projectId: "boni-28f63",
    storageBucket: "boni-28f63.appspot.com",
    messagingSenderId: "905219857437",
    appId: "1:905219857437:web:78e57504cb6612abf77af4",
    measurementId: "G-07DQYNGZL1"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default};
