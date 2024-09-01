import http, { IncomingMessage, ServerResponse } from "http";
import os from "os";
import fs from "fs";
import path from "path";
import * as url from "url";
import { UserData } from "../user/user_data";

export class AppRouting {
    static appRouting(request: IncomingMessage, response: ServerResponse): void {
        // Parse URL and method from the incoming request
        let pathName = url.parse(request.url!, true).pathname?.trim(); // Trimming any extra spaces
        let method = request.method;

        // Log path and method for debugging purposes
        console.log(`Request URL Path: ${pathName}, Method: ${method}`);

        if (!pathName || !method) {
            response.writeHead(400, { "Content-Type": "text/plain" });
            response.end("Bad Request");
            return;
        }

        // Normalize the pathname to avoid missing slashes or other discrepancies
        pathName = pathName.endsWith("/") ? pathName.slice(0, -1) : pathName;

        // Handle GET request for '/users' to retrieve all user data
        if (pathName === "/users" && method === "GET") {
            let users = new UserData().getAllUser();
            if (users) {
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(users);
            } else {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Failed to retrieve users.");
            }
        }

        // Handle GET request for '/os' to return OS-related information
        else if (pathName === "/os" && method === "GET") {
            let osMap = {
                osMem: os.totalmem(),
                homedir: os.homedir(),
                freeMem: os.freemem(),
                hostName: os.hostname(),
            };

            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(`<h1>${osMap.hostName}</h1><br><h2>${JSON.stringify(osMap)}</h2>`);
        }

        // Handle GET request for '/fs' to read a file
        else if (pathName === "/fs" && method === "GET") {
            fs.readFile(path.join(__dirname, "users_response.json"), "utf-8", (error, result) => {
                if (error) {
                    response.writeHead(500, { "Content-Type": "text/plain" });
                    response.end(`Error reading file: ${error.message}`);
                } else {
                    response.writeHead(200, { "Content-Type": "application/json" });
                    response.end(result);
                }
            });
        }

        // Handle POST request for '/createUser' to create a new user
        else if (pathName === "/createUser" && method === "POST") {
            let body: any = "";
            request.on("data", (chunk) => {
                body += chunk;
            }).on('end', () => {
                console.log(body); // Process user data from the body
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end(`User created with data: ${body}`);
            });
        }

        // Handle POST request for '/login'
        else if (pathName === "/login" && method === "POST") {
            let body: any = "";
            request.on("data", (chunk) => {
                body += chunk;
            }).on("end", () => {
                let jsonResponse = JSON.parse(body);

                // Check the provided credentials
                if (jsonResponse.email === "yuvi@gmail.com" && jsonResponse.password === "1234567") {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.end('<h1>USER LOGIN SUCCESSFULLY</h1>');
                } else {
                    response.writeHead(401, { "Content-Type": "text/html" });
                    response.end("<h1>INVALID EMAIL AND PASSWORD</h1>");
                }
            });
        }

        // Handle unmatched routes and send a 404 response
        else {
            // Log unmatched path for debugging
            console.log(`Unmatched Path: ${pathName}`);
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("404 - Path not found");
        }
    }
}
