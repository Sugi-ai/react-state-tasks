"use client";

import { useState } from "react";

export const MediumTodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        setTodos([...todos, inputValue]);
        console.log("add todo", todos); 
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((el, i) => index !== i);
        setTodos(newTodos);
    }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input onChange={handleOnChange} type="text" placeholder="Add todo" />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>{todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button></div>
        ))}
        </div>
  );

}
    
