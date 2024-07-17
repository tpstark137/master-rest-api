import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Connected to the database");
        })
        // later on in future if error occurred after establishing connection
        mongoose.connection.on("error", (error) => {
            console.error("Error connecting to the database",error);
        })

        await mongoose.connect(config.databaseUrl as string)
    }
    // catch will get error on initial connection
    catch (error) {
        console.error("Error connecting to the database", error);
        // if connection failed to establish we will stop our server
        process.exit(1);
    }
}
export default connectDB;