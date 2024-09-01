
import express from 'express';

const app : express.Application = express();

const localhost : string = "localhost";
const postNumber : number = 5000;


/// SEND RESPONSE TO THE CLIENT FROM THE SERVER
app.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Get</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
});
app.post('/user',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Post</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
});
app.put('/update',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Put</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
});
app.delete('/delete',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Delete</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
})


/// APP EXPRESS LISTENER HARE POSTNUMBER AND LOCALHOST
app.listen(postNumber,localhost,()=>{
    console.log("Welcome to Express Server");
});
