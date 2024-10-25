import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm.js";
import ToDoList from "./ToDoList.js";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";



function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data));
  }, []);

  const addToDo = (todo) => {
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
        .then((response) => response.json())
        .then((newTodo) => setTodos([...todos, newTodo]));
  };

  const updateToDo = (id, updatedTodo) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
        .then((response) => response.json())
        .then((newTodo) => {
          setTodos(todos.map((todo) => (todo._id === id ? newTodo : todo)));
        });
  };

  const deleteToDo = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mb-4">To-Do List</h1>
            <ToDoForm addToDo={addToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
