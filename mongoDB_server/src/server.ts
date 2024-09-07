
import express from 'express';
import {userRouting} from "./routing/user_routing";
import {connectToDatabase} from "./data/mongodab_clients";

const app : express.Application = express();

/// ACCEPT JSON DAT
app.use(express.json());
// app.use(appLogger)
// ---------
app.use("/v1/user",userRouting);



const localhost : string = "localhost";
const postNumber : number = 5550;


/// APP EXPRESS LISTENER HARE POSTNUMBER AND LOCALHOST
app.listen(postNumber,localhost,async ()=>{
    await connectToDatabase();
    console.log(`http://${localhost}:${postNumber}/v1/user/user/`);
    console.log("Welcome to Mongo Server");
});
