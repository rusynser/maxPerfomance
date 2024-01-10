
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import mongodb from "mongodb";
import { client } from "./config/databaseConect.js";

import {dbconnect}  from "./config/databaseConect.js";
import{userRouter}from "./routes/user.js"
const app=express();
app.use(express.json());
app.use(cors());
app.use("/auht",userRouter);



const port = 3001;






dbconnect()
.then(() => {
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    process.on('SIGINT', () => {
      console.log('Received SIGINT. Closing the server and database connection...');
      server.close(() => {
        // Close the MongoDB client
        client.close();
        console.log('Server and database connection closed. Exiting process.');
        process.exit(0);
      });
    });
  })
  .catch((error) => {
    console.error('Error starting the app:', error);
  });



