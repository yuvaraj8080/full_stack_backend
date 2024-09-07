import express from "express";
import { getDatabase } from "../data/mongodab_clients"; // Import the function to get the MongoDB client
import { ObjectId } from "mongodb"; // Import ObjectId to handle MongoDB object IDs

// Create an Express router instance
export const userRouting = express.Router();
export default userRouting;

//// [CRUD OPERATIONS]

// 1) CREATE: Add a new user
userRouting.post("/addNewUser", async (request: express.Request, response: express.Response) => {
    try {
        let db = getDatabase(); // Get the MongoDB database instance
        let userCollection = db.collection("users"); // Reference to the 'users' collection
        let body = request.body; // Get the request body

        const data = await userCollection.insertOne(body); // Insert the user data into the collection

        response.status(200).json({
            response: data, // Return the result of the insertion
        });
    } catch (error) {
        // Handle any errors that may occur
        response.status(500).json({ error: "Failed to add new user" });
    }
});

/// 2) GET API: Get all users
userRouting.get("/getUsers", async (request: express.Request, response: express.Response) => {
    try {
        let db = getDatabase(); // Get the MongoDB database instance
        let userCollection = db.collection("users"); // Reference to the 'users' collection
        let data = await userCollection.find({}).toArray(); // Retrieve all users from the collection

        response.status(200).json({
            response: data, // Return the list of users
        });
    } catch (error) {
        // Handle any errors that may occur
        response.status(500).json({ error: "Failed to fetch users" });
    }
});

/// 3) GET SINGLE USER: Get user by ID
userRouting.get("/getProfile/:id", async (request: express.Request, response: express.Response) => {
    try {
        let db = getDatabase(); // Get the MongoDB database instance
        let userId = request.params.id; // Get the user ID from the URL parameters

        // Find the user with the specified ObjectId
        let userCollection = db.collection("users");
        let data = await userCollection.findOne({
            _id: new ObjectId(userId), // Use ObjectId to query the user by ID
        });

        if (data) {
            response.status(200).json({
                response: data, // Return the user's profile data
            });
        } else {
            response.status(404).json({ error: "User not found" }); // Handle case if user not found
        }
    } catch (error) {
        // Handle any errors that may occur
        response.status(500).json({ error: "Failed to fetch user profile" });
    }
});

/// 4) UPDATE SINGLE USER: Update user by ID
userRouting.put("/updateUser", async (request: express.Request, response: express.Response) => {
    try {
        let db = getDatabase(); // Get the MongoDB database instance
        let userCollection = db.collection("users"); // Reference to the 'users' collection
        const body = request.body; // Get the request body

        // Update the user document with the provided data
        let data = await userCollection.updateOne(
            { _id: new ObjectId(body.userId) }, // Find the user by ObjectId
            { $set: { name: body.name, email: body.email, following: body.following } } // Set the new fields
        );

        response.status(200).json({
            response: data, // Return the result of the update
        });
    } catch (error) {
        // Handle any errors that may occur
        response.status(500).json({ error: "Failed to update user" });
    }
});

/// 5) DELETE USER: Delete user by ID
userRouting.delete("/deleteUser/:userId", async (request: express.Request, response: express.Response) => {
    try {
        let db = getDatabase(); // Get the MongoDB database instance
        let userCollection = db.collection("users"); // Reference to the 'users' collection
        const userId = request.params.userId; // Get the user ID from the URL parameters

        // Delete the user document with the specified ObjectId
        let data = await userCollection.deleteOne({
            _id: new ObjectId(userId),
        });

        if (data.deletedCount === 1) {
            response.status(200).json({
                response: "User deleted successfully", // Return success if the user is deleted
            });
        } else {
            response.status(404).json({ error: "User not found" }); // Handle case if user not found
        }
    } catch (error) {
        // Handle any errors that may occur
        response.status(500).json({ error: "Failed to delete user" });
    }
});
