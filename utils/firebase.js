import { initializeApp, getAnalytics } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const config = {
  apiKey: "AIzaSyCzrA9bQre-6dySMSVLRA--7rNoWv9lTDw",
  authDomain: "nextjssaasfirebasetest.firebaseapp.com",
  databaseURL: "https://nextjssaasfirebasetest-default-rtdb.firebaseio.com",
  projectId: "nextjssaasfirebasetest",
  storageBucket: "nextjssaasfirebasetest.appspot.com",
  messagingSenderId: "746433707219",
  appId: "1:746433707219:web:b3ba92b07418e80a202826",
  measurementId: "G-PZGY3TRVNE"
};

const app = initializeApp(config);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export default firebase;



