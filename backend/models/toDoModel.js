import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const ToDo = new mongoose.model("ToDo", toDoSchema);
