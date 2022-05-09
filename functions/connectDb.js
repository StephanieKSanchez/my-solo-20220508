import { functions } from "firebase-functions"; 
import { express } from "express";
import { cors } from "cors";

import { serviceAccount } from "./credentials.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();

export const getFamilyVacationsCollection = db.collection('familyVacations');