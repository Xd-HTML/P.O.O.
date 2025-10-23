// Importar funciones Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNeN0AIcXw0aAiwc6S7472y7YMjHzbV94",
  authDomain: "tienda-virtual-883ef.firebaseapp.com",
  projectId: "tienda-virtual-883ef",
  storageBucket: "tienda-virtual-883ef.firebasestorage.app",
  messagingSenderId: "871120614985",
  appId: "1:871120614985:web:0274d91497b7f1e3d33198"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
