// 3 elements - checkbox, task, delete button
// example : []   task    [delete button]

import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
    // we want to toggleComplete when clicking checkbox
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleDeleteButton() {
        removeTodo(todo.id)
    }

    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox"
                onClick={handleCheckboxClick}
            />
            <li
                style={{
                    color: "white",
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >{todo.task}</li>
            <button onClick={handleDeleteButton}>X</button>
        </div>
    );
}

export default Todo;