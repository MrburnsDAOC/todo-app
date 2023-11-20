import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import "./utils/mongodb.js";
import toDoRouter from "./routes/ToDoRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/todo", toDoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
