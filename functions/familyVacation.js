import { connectDb } from "./connectDb.js";

export const getFamilyVacationsCollection = async(req, res) => {
    const db = connectDb();
    const familyVacations = await db.collection('familyVacations').get();
    const familyVacationsArray = familyVacations.docs.map(doc => doc.data());
    res.status(200).send(familyVacationsArray);
    return familyVacations
};