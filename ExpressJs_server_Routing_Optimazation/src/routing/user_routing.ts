import express from "express";

export const userRouting = express.Router();


/// SEND RESPONSE TO THE CLIENT FROM THE SERVER
userRouting.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Get</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
});
userRouting.post('/user',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Post</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
});
userRouting.put('/update',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Put</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
});
userRouting.delete('/delete',(request:express.Request,response:express.Response)=>{
    response.status(200);
    response.send("<h1>Welcome to express server Method Delete</h1>");
    response.contentType("text/html");
    response.links("Heay i am yuvaraj");
})

/// THIS IS THE LOGIN POST API
userRouting.post("/login",(request:express.Request,response:express.Response)=>{
    let body = request.body
    response.status(200).json(body);
})
