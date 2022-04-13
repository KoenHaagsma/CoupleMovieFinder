import firebase from 'firebase/app.js';
import 'firebase/auth';

const app = firebase.initializeApp({});

export const auth = app.auth();
export default app;
