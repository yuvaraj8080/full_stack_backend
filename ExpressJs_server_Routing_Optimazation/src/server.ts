
import express from 'express';
import {userRouting} from "./routing/user_routing";
import {postRouting} from "./routing/post_Routing";

const app : express.Application = express();

app.use("/v1/user",userRouting);
app.use("/v1/post",postRouting);
/// ACCEPT JSON DATA
app.use(express.json());



const localhost : string = "localhost";
const postNumber : number = 5500;


/// APP EXPRESS LISTENER HARE POSTNUMBER AND LOCALHOST
app.listen(postNumber,localhost,()=>{
    console.log(`${localhost}:${postNumber}/v1/user/update`);
    console.log("Welcome to Express Optimization Routing Server");
});
