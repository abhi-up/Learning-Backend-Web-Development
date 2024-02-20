// require('dotenv').config({path: "./env"})

// Importing the dotenv library for loading environment variables from a .env file
import dotenv from "dotenv";
// Importing the connectDB function from the db/index.js file
import connectDB from "./db/index.js";

// Loading environment variables from a .env file located in the "./env" directory
dotenv.config({
  path: "./env",
});

// Connecting to the database by invoking the connectDB function
connectDB();

/*

// Importing the express library for creating the server
import { express } from "express";
// Creating an instance of the express application
const app = express();

// First Approach for Database connection
(async () => {
  try {
    // Connecting to the MongoDB database using environment variables and the database name constant
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // Setting up error event listener for the express application
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    // Starting the express server to listen on the specified port from environment variables
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    // Catching any errors that occur during database connection or server setup
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
