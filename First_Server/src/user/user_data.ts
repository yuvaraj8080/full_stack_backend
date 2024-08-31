import * as fs from "fs";
import * as path from "path";

export class UserData {

    /// GETTING ALL USER DATA (Synchronous)
    getAllUser(): string | undefined {
        try {
            let userResponse = fs.readFileSync(path.join(__dirname, "user_response.json"), "utf-8");
            return userResponse;
        } catch (err) {
            console.error("Error reading users-response.json:", err);
            return undefined;
        }
    }

    /// CREATE USER
    createUser(name: string): string {
        return `Hi, My Name Is ${name}`;
    }
}
