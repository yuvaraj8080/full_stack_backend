import express from "express";
import {appLogger} from "../app_logger/app_logger";

export const userRouting = express.Router();

/// MIDDLE WARE
userRouting.use((request:express.Request,response:express.Response,next:express.NextFunction)=>{
    console.log(new Date().toLocaleDateString());
    console.log(new Date().toLocaleTimeString());
    console.log(request.method);
    next();
});


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
userRouting.post("/login",appLogger,(request:express.Request,response:express.Response)=>{
    let body = request.body;
    let{email,password} = request.body;
    if(email == "yuvi@gmail.com" && password == "123456789"){
        response.status(200).json({
            "status":response.statusCode,
            "body":body,
            "msg":"user login successfully",
        })
    }
    else{
        response.status(401).json({
            "status":response.statusCode,
            "body":body,
            "msg":"invalid Email And Password",
        })
    }

    response.status(200).json(body);
});



