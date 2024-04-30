import React, { useEffect, useState } from "react";
import Todo from "./components/todo";
import { addTodo, getAllToDo , updateTodo , deleteToDo } from "./utils/handleApi";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllToDo((data) => {
      if (Array.isArray(data)) {
        setTodo(data);
      } else {
        console.error("Data fetched is not an array:", data);
        setTodo([]);
      }
    });
  }, []);

  const updateMode = (_id , text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To Do </h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add task to do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add_btn"
            onClick={
              isUpdating
                ? () => updateTodo(todoId , text, setTodo , setText , setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "ADD"}
          </div>
        </div>
        {todo.map((item) => (
          <Todo key={item.id} text={item.text}
          updateMode={() => updateMode(item._id , item.text)} 
          deleteToDo={() => deleteToDo(item._id , setTodo)} />
        ))}
      </div>
    </div>
  );
};
export default App;
