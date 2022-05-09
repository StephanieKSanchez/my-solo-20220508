import  functions  from "firebase-functions"; 
import  express  from "express";
import  cors  from "cors";
import { getFamilyVacationsCollection } from "./familyVacation.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('This is working!')
});

app.get('/familyVacations', getFamilyVacationsCollection);

export const api = functions.https.onRequest(app);










// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
