import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "global-life-image-storage.firebaseapp.com",
    projectId: "global-life-image-storage",
    storageBucket: "global-life-image-storage.appspot.com",
    messagingSenderId: "931177926459",
    appId: "1:931177926459:web:511c8bf9d8683fd212f11e",
};

const app = initializeApp(firebaseConfig);

// export const storage = getStorage(app);

export default app;
