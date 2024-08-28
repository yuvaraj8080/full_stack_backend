import http, { IncomingMessage, ServerResponse } from "http";

const hostName: string = "localhost";
const portNumber: number = 450;

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    // Correcting color and using template literal for string interpolation
    res.write(`<h1 style="color: red">This is my first server and Method ${req.method}</h1><br><h2>${res.statusCode}</h2>`);
    res.end();
}).listen(portNumber, hostName, () => {
    console.log("Hello, My First Server is running!");
    console.log(`http://${hostName}:${portNumber}`);
});
    