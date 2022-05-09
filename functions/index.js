import { db } from "./connectDb.js";

const app = express();
app.use(cors());
app.use(express.json());

export const api = functions.https.onRequest(app);

import { createFamilyVacation } from "./services.js";
import { getFamilyVacationsCollection } from "./connectDb.js";

api.get('/familyVacations', getFamilyVacationsCollection);









// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
