import { getFamilyVacationsCollection } from "./connectDb.js";

export const createFamilyVacation = async(req, res) => {
    const db = connectDb();
    const familyVacations = await db.collection('familyVacations').get();
    const familyVacationsArray = familyVacations.doc.map(doc => doc.data());
    res.status(200).send(familyVacationsArray);
    return familyVacations
};