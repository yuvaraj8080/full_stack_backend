
import express from "express";

export const postRouting = express.Router();

postRouting.get("/getPost/:id",(request:express.Request,response:express.Response)=> {
    let postId = request.params.id;
    console.log("postId",+postId);

    response.status(200).send('<h1>Welcome to get Post API</h1>');
})