import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Eghq_CPcVkcb2WgktsR70ZenO0kCtYY",
  authDomain: "cryptotracker-7bc7b.firebaseapp.com",
  projectId: "cryptotracker-7bc7b",
  storageBucket: "cryptotracker-7bc7b.firebasestorage.app",
  messagingSenderId: "816217281280",
  appId: "1:816217281280:web:ee3340f284a256e6fe19e5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
