import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import axios from "axios";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  // handleAPI
  const baseUrl = "http://localhost:5000/todo";

  const getAllToDo = (setToDo) => {
    axios
      .get(baseUrl)
      .then(({ data }) => {
        console.log("DATA: ", data);
        setToDo(data.reverse()); // wenn nicht reverse => bei reload ältestes oben
      })
      .catch((err) => console.log(err));
  };

  const addToDo = async (text, setText, toDo, setToDo) => {
    const response = await fetch(`${baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: text }),
    }).catch((err) => console.log(err));

    if (!response.ok) {
      throw new Error("Error while adding a new ToDo!");
    }
    const newToDo = await response.json();
    setToDo([newToDo, ...toDo]);
    setText(""); // clear text field
  };

  const deleteToDo = (_id, setToDo) => {
    axios
      .delete(`${baseUrl}/delete/${_id}`)
      .then(() => {
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  };

  const deleteAll = (setToDo) => {
    axios
      .delete(`${baseUrl}/deleteAll`)
      .then(() => {
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  };

  /////

  /////

  //////

  // INPUT AREA
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo-App</h1>

        <div className="todo-form">
          <input
            type="text"
            placeholder="Add ToDo..."
            value={text}
            onChange={(evt) => setText(evt.target.value)}
          />
          <button
            type="button"
            className="todo-button"
            onClick={() => addToDo(text, setText, toDo, setToDo)}
          >
            Add
          </button>
        </div>

        {/* TODO ITEMS */}
        {toDo.map((item) => (
          <TodoList
            key={item._id}
            text={item.name}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}

        {/* DELETE ALL */}
        <div className="deleteAllSection">
          <button className="deleteAll" onClick={() => deleteAll(setToDo)}>
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
