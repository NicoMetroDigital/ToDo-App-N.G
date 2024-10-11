import React from "react";

const ToDoItem = ({ todo, deleteTodo, editHandler }) => {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => editHandler(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;

