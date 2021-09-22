import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// -- The seed file will be called just ONCE  here !!Only ONCE

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBLIuIJx1L_0HPEGbXKIGPwwXCCH1lQk3c',
  authDomain: 'instagram-yt-d6fc8.firebaseapp.com',
  projectId: 'instagram-yt-d6fc8',
  storageBucket: 'instagram-yt-d6fc8.appspot.com',
  messagingSenderId: '496517893683',
  appId: '1:496517893683:web:34cefeb85e230059d75d46'
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// -- Here is where I want to call the seed file
// seedDatabase(firebase);
// console.log('Firebase', firebase);

export { firebase, FieldValue };
