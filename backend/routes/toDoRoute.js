import { Router } from "express";
import {
  getToDo,
  createToDo,
  // updateToDo,
  deleteToDo,
  deleteAll,
} from "../controllers/toDoController.js";

const toDoRouter = Router();

toDoRouter
  .get("/", getToDo)
  .post("/create", createToDo)
  // .patch("/update", updateToDo)
  .delete("/delete/:id", deleteToDo)
  .delete("/deleteAll", deleteAll);

export default toDoRouter;
