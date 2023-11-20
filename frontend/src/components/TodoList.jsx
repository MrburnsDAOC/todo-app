import React from "react";
// import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ text, deleteToDo }) => {
  return (
    <div className="todo-list">
      <div className="text">{text}</div>
      <div className="icons">
        {/* <BiEdit className="icon" onClick={updateMode} /> */}
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default TodoList;
