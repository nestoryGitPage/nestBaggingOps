import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdranF6QMo9ocMXH-Cx_vE-hWIb-yObs8",
    authDomain: "demoapp-2e201.firebaseapp.com",
    databaseURL: "https://demoapp-2e201-default-rtdb.firebaseio.com",
    projectId: "demoapp-2e201",
    storageBucket: "demoapp-2e201.appspot.com",
    messagingSenderId: "1076789334006",
    appId: "1:1076789334006:web:61ac2dbfd7f072982441d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
