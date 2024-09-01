import fs from "fs";
import path from "path";

// Exporting the UserData class
export class UserData {
    // GET all user data (Synchronous)
    getAllUser(): string | undefined {
        try {
            let userResponse = fs.readFileSync(path.join(__dirname, "user_response.json"), "utf-8");
            return userResponse;
        } catch (err) {
            console.error("Error reading users_response.json:", err);
            return undefined;
        }
    }

    // CREATE a user with the provided name
    createUser(name: string): string {
        return `Hi, My Name Is ${name}`;
    }
}
