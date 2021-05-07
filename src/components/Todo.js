// 3 elements - checkbox, task, delete button
// example : []   task    [delete button]

import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
function Todo({ todo, toggleComplete, removeTodo }) {
    // we want to toggleComplete when clicking checkbox
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleDeleteButton() {
        removeTodo(todo.id)
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={todo.completed}
                onClick={handleCheckboxClick}
            />
            <Typography
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >{todo.task}</Typography>
            <IconButton onClick={handleDeleteButton}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;