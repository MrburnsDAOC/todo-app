import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, { dbName: process.env.DATABASE })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("Connection error!", err));
