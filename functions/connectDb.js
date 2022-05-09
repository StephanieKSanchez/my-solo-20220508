import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import credentials from "./credentials.js"

export const connectDb = () => {
  if(getApps().length === 0) {
    initializeApp({
      credential: cert(credentials)
    });
  }
  return getFirestore();
}
