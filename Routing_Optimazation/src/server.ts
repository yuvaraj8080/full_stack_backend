    import http, { IncomingMessage, ServerResponse } from "http";
    import * as url from "url";
    import { AppRouting } from "./routing/app_routing";

    const hostName: string = "localhost";
    const portNumber: number = 500; // Corrected port to a valid range

    http.createServer((request: IncomingMessage, res: ServerResponse) => {
        // Route requests using AppRouting
        AppRouting.appRouting(request, res);

    }).listen(portNumber, hostName, () => {
        console.log("Hello, My First Server is running!");
        console.log(`Server running at http://${hostName}:${portNumber}`);
    });
