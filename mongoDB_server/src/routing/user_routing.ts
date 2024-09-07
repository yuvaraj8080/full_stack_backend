import express from "express";
import {getDatabase} from "../data/mongodab_clients";

export const userRouting = express.Router();
export default userRouting;

////[CRUD OPRATION] CREATE
userRouting.post("/addNewUser",async(request:express.Request,response:express.Response)=>{
    let db = getDatabase();
    let userCollection = db.collection("users");
    let body = request.body;

    const data = await userCollection.insertOne(body);

    response.status(200).json({
        "response":data
    });
});
