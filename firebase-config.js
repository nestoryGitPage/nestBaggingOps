import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQexK51VatLXyIZ28HZ77gA-_rpHTwctY",
    authDomain: "bagapp2.firebaseapp.com",
    databaseURL: "https://bagapp2-default-rtdb.firebaseio.com",
    projectId: "bagapp2",
    storageBucket: "bagapp2.appspot.com",
    messagingSenderId: "828892925316",
    appId: "1:828892925316:web:56e2e6743f0e412396a1d1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
