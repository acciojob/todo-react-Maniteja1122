import React, { useState } from "react";
import  "../styles/Style.css"

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleAdd = () => {
    let newobj = {
      todo: input,
      id: Date.now() + Math.random + input,
      status: false,
    };

    let todosAfterAdding = [...todos, newobj];

    setTodos(todosAfterAdding);

    setInput("");
  };

  const handleDelete = (id) => {
    let todosAfterDeleting = todos.filter((todo) =>
      todo.id === id ? !todo : todo
    );
    setTodos(todosAfterDeleting);
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
          <>
            <ul>
              <li key={todo.id}>{todo.title}</li>
            </ul>
            <button onClick={handleDelete}>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Todo;
