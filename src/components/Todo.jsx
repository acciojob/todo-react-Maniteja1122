import React, { useState } from "react";
import "../styles/Style.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo = {
      todo: input,
      id: Date.now() + Math.random(),
      status: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="main">
      <h3>To-do list</h3>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <ul>
              <li>{todo.todo}</li>
            </ul>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
