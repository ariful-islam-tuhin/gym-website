import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// import { initializeApp } from "@firebase/app";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

// const app = initializeApp(firebaseConfig);

export default initializeAuthentication;