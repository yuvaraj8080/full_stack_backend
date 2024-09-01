
import express from 'express';
import {userRouting} from "./routing/user_routing";
import {postRouting} from "./routing/post_Routing";
import {appLogger} from "./app_logger/app_logger";

const app : express.Application = express();

/// ACCEPT JSON DAT
app.use(express.json());
// app.use(appLogger)
// ---------
app.use("/v1/user",userRouting);
app.use("/v1/post",postRouting);



const localhost : string = "localhost";
const postNumber : number = 5550;


/// APP EXPRESS LISTENER HARE POSTNUMBER AND LOCALHOST
app.listen(postNumber,localhost,()=>{
    console.log(`${localhost}:${postNumber}/v1/user/update`);
    console.log("Welcome to Express Optimization Routing Server");
});
