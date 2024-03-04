import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzJrxspOzfabWTJIUVMsRo2-C30IHVpS0",
    authDomain: "twitter-627a2.firebaseapp.com",
    projectId: "twitter-627a2",
    storageBucket: "twitter-627a2.appspot.com",
    messagingSenderId: "796415223643",
    appId: "1:796415223643:web:b5fbafcb3d540885851c7e",
    measurementId: "G-Z4ENQ9QVN0"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export default db;