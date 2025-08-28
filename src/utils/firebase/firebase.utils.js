import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuAwOD-NeJljoumWx5yeG8Px6DpQhZsVQ",
  authDomain: "crwn-clothing-db-e0dc2.firebaseapp.com",
  projectId: "crwn-clothing-db-e0dc2",
  storageBucket: "crwn-clothing-db-e0dc2.firebasestorage.app",
  messagingSenderId: "325257059679",
  appId: "1:325257059679:web:a4086bc1baceed6323aaea"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);