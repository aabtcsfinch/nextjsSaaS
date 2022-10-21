import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
let analytics;
if (app.name && typeof window !== 'undefined'){
	analytics = getAnalytics(app);
}

//initialize services
const db = getFirestore(app);

//collection ref
const colRef = collection(db, 'books')

//get collection data
getDocs(colRef).then((snapshot) => {
	let books = [];
  const arr = [1,2,3,4,5];
  console.log(...arr);
	snapshot.docs.forEach((doc) => {
		books.push({ ...doc.data(), id: doc.id })
	})

	console.log(books);
})
.catch(err => {
	console.log(err.message);
})


export default {analytics, db, colRef};



