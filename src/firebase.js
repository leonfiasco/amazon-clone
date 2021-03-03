import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCl_HDi7cQu64hEAfaE3Ec2HOVihgNuGJw',
	authDomain: 'ecommerce-85b7f.firebaseapp.com',
	databaseURL:
		'https://ecommerce-85b7f-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'ecommerce-85b7f',
	storageBucket: 'ecommerce-85b7f.appspot.com',
	messagingSenderId: '236279150442',
	appId: '1:236279150442:web:2ed64b251f927d526bd713',
	measurementId: 'G-GGLP1EHG92',
};

// initialising firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialising database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
