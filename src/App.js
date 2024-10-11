import React, { useState, useEffect } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);


  useEffect(() => {
    const initialTodos = [
      { _id: 1, title: "First Task", description: "This is the first task." },
      { _id: 2, title: "Second Task", description: "This is the second task." }
    ];
    setTodos(initialTodos);
  }, []);

  // Create new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, { _id: todos.length + 1, ...newTodo }]);
  };

  // Update an existing todo
  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(t => t._id === updatedTodo._id ? updatedTodo : t));
    setEditTodo(null);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  // Set the todo to be edited
  const editHandler = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} editHandler={editHandler} />
    </div>
  );
};

export default App;

