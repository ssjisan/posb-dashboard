import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAbTe3wWTM8LdYgQZozFvuEvgvdxcCc2YA",
    authDomain: "insighttechbd-2c31b.firebaseapp.com",
    databaseURL: "https://insighttechbd-2c31b-default-rtdb.firebaseio.com",
    projectId: "insighttechbd-2c31b",
    storageBucket: "insighttechbd-2c31b.appspot.com",
    messagingSenderId: "489899367970",
    appId: "1:489899367970:web:34885be5e27ce79903b47b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
