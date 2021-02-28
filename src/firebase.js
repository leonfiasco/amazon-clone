import firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'clone-771d6.firebaseapp.com',
	projectId: 'clone-771d6',
	storageBucket: 'clone-771d6.appspot.com',
	messagingSenderId: '313867375818',
	appId: '1:313867375818:web:4cc3ec318b3edd85095033',
	measurementId: 'G-ELK3E16H60',
};

// initialising firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialising database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
