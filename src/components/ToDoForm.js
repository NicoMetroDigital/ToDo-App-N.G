import React, { useState, useEffect } from "react";

const ToDoForm = ({ addTodo, editTodo, updateTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      updateTodo({
        ...editTodo,
        title,
        description,
      });
    } else {
      addTodo({ title, description });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{editTodo ? "Update To-Do" : "Add To-Do"}</button>
    </form>
  );
};

export default ToDoForm;

