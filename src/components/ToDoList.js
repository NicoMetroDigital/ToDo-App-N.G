import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTodo, editHandler }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No To-Dos available</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            editHandler={editHandler}
          />
        ))
      )}
    </div>
  );
};

export default ToDoList;

