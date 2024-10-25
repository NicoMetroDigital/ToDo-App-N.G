import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

function ToDoItem({ todo, updateToDo, deleteToDo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);
    const [newDescription, setNewDescription] = useState(todo.description);

    const handleUpdate = () => {
        updateToDo(todo._id, { title: newTitle, description: newDescription });
        setIsEditing(false);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {isEditing ? (
                    <>
                        <Form.Control
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="mb-2"
                        />
                        <Form.Control
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="mb-2"
                        />
                        <Button variant="success" onClick={handleUpdate} className="me-2">
                            Save
                        </Button>
                        <Button variant="secondary" onClick={() => setIsEditing(false)}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Card.Title>{todo.title}</Card.Title>
                        <Card.Text>{todo.description}</Card.Text>
                        <Button variant="info" onClick={() => setIsEditing(true)} className="me-2">
                            Edit
                        </Button>
                        <Button variant="danger" onClick={() => deleteToDo(todo._id)}>
                            Delete
                        </Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default ToDoItem;
