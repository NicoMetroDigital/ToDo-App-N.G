import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, updateToDo, deleteToDo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem
                    key={todo._id}
                    todo={todo}
                    updateToDo={updateToDo}
                    deleteToDo={deleteToDo}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
