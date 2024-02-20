// Importing the mongoose library for MongoDB interactions
import mongoose from "mongoose";
// Importing the database name constant from the constants file located in the parent directory
import { DB_NAME } from "../constants.js";

// Defining an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Establishing a connection to the MongoDB database using environment variables and the database name constant
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // Logging a message indicating successful connection to the MongoDB database, along with the host information
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // Handling any errors that occur during the database connection process
    console.log("MONGODB connection FAILED: ", error);
    // Exiting the Node.js process with an exit code of 1, indicating an abnormal termination due to a connection error
    process.exit(1);
  }
};

// Exporting the connectDB function to make it accessible to other parts of the application
export default connectDB;
