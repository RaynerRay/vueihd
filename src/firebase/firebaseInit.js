import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCgL6LtTf3_1ykO1SinhBXrjVceKMal4OE",
    authDomain: "vue-shop-495d4.firebaseapp.com",
    projectId: "vue-shop-495d4",
    storageBucket: "vue-shop-495d4.appspot.com",
    messagingSenderId: "582140240228",
    appId: "1:582140240228:web:45f6b8bec414eca9701a71"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
