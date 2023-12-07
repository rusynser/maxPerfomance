
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import mongodb from "mongodb";

import{userRouter}from "./routes/user.js"

const app=express();
app.use(express.json());
app.use(cors());
import { MongoClient } from 'mongodb';//app.use("/auth",userRouter);


const uri = "mongodb+srv://maxPerformanceDB:maxPerformance123@maxperformance.f203yk9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run(){
  try{

    const database=client.db("maxPerformance");
    const haiku = database.collection("haiku");

    


    const doc = {

      title: "Record of a Shriveled Datum",

      content: "No bytes, no problem. Just insert a document, in MongoDB",

    }

    const result = await haiku.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);

  } finally {

     // Close the MongoDB client connection

    await client.close();
  }
  
}
run().catch(console.dir);

app.listen(3001,()=>console.log("Server Started"));


