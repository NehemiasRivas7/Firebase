// Importar las funciones de Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Tu configuración de Firebase (obtenida desde Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyAwzzBIIzZR64-T6j9j-md4zfnixNIIlWc",
    authDomain: "ayudantiadw.firebaseapp.com",
    projectId: "ayudantiadw",
    storageBucket: "ayudantiadw.firebasestorage.app",
    messagingSenderId: "642745174871",
    appId: "1:642745174871:web:699297cdf1472df0f14c12",
    measurementId: "G-HF2VHSEYHK"
  };

// 3Inicializar Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// Obtener servicios de Firebase
const analytics = getAnalytics(app); // Para estadísticas (opcional)
const db = getFirestore(app); // Para la base de datos Firestore

// 5️Exportar para usar en otros archivos JavaScript
export { app, analytics, db };