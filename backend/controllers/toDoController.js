import { ToDo } from "../models/toDoModel.js";

// Create
export const createToDo = async (req, res) => {
  try {
    const newToDo = new ToDo(req.body);
    const response = await newToDo.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Read one
export const getToDo = async (req, res) => {
  try {
    const response = await ToDo.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update one
// export const updateToDo = async (req, res) => {
//   try {
//     const { _id, name } = await ToDo(req.body);

//     const response = await ToDo.findByIdAndUpdate(_id, { name });
//     res.status(201).send("Update successfully!");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// Delete one
export const deleteToDo = async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);
    res.status(204).json({ msg: "Deleted successfully!" });
  } catch (error) {
    res.status(500).send("BACKEND ERROR!", error);
  }
};

// Delete all
export const deleteAll = async (req, res) => {
  try {
    await ToDo.deleteMany({});
    res.status(204).json({ msg: "Deleted successfully!" });
  } catch (error) {
    res.status(500).send("BACKEND ERROR!", error);
  }
};
