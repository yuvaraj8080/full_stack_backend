/// IMPORT MONGO DB CLIENTS, AND DB
import {MongoClient,Db} from "mongodb";

let mongoDb : Db;

////  FUNCTION TO CONNECT LOCAL HOST DATABASES
export async function connectToDatabase(){
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);
    mongoDb = client.db("SocialMedia");
    console.log("DB connected successfully");
}

////  FUNCTION TO RETURN MONGO DB DATABASE
export function getDatabase(): Db{
    return mongoDb;
}