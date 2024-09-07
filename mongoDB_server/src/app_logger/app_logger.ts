
import express from "express";

export let appLogger = (request:express.Request,response:express.Response,next:express.NextFunction)=>{

    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleTimeString();
    const method = request.method;
    const url = request.url;

    console.log(`${time} | ${date} | ${method} | ${url}`);
    next();
}