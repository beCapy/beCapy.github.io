import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW41-5DoeBFtsqtXk4JFYKAWMk_VSKrag",
  authDomain: "becapy-host.firebaseapp.com",
  projectId: "becapy-host",
  storageBucket: "becapy-host.appspot.com",
  messagingSenderId: "701621722909",
  appId: "1:701621722909:web:984ff2c353c04f4cc5cbf4",
  measurementId: "G-4E62FFB1ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
