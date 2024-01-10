import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
const uri = "mongodb+srv://maxPerformanceDB:maxPerformance123@maxperformance.f203yk9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbname='maxPerformance';


 async function  dbconnect(){
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

async function  dbclose() {
  try {
    await client.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing the database connection:', error);
    throw error;
  }
}


export {dbconnect,client,dbname,dbclose};
