import http, { IncomingMessage, ServerResponse } from "http";
import * as url from "url";
import * as os from "os";
import { UserData } from "./user/user_data";

const hostName: string = "localhost";
const portNumber: number = 450;

http.createServer((request: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let user = new UserData();
    let _url = request.url;
    let pathName = url.parse(_url!).pathname; // Extracting pathName

    // Call create new user class
    if (pathName === "/createUser") {
        let data = user.createUser("Manoj");
        res.end(`${data}`);
    } else if (pathName === "/users") {
        let users = user.getAllUser();
        if (users) {
            res.write(`<pre>${JSON.stringify(JSON.parse(users), null, 2)}</pre>`);
        } else {
            res.write("Error reading user data.");
        }
        res.end();
    }

    // Create OS map
    let osMap = {
        osMem: os.totalmem(),
        homedir: os.homedir(),
        freeMem: os.freemem(),
        hostName: os.hostname(),
    };

    let queryParams = url.parse(_url!).query;
    let filteredParams = queryParams?.split("data").pop()!.replaceAll("%20", "");

    res.write(`
        <h1>${osMap.hostName}</h1><br>
        <h2>${JSON.stringify(osMap)}</h2><br>
        <h2>${_url}</h2><br>
        <h2>query: ${filteredParams}</h2><br>
        <h1 style="color: red">This is my first server and Method: ${request.method}</h1><br>
        <h2>${res.statusCode}</h2>
    `);
    res.end();
}).listen(portNumber, hostName, () => {
    console.log("Hello, My First Server is running!");
    console.log(`http://${hostName}:${portNumber}`);
});
