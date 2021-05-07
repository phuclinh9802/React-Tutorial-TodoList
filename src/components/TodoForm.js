import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';

// add addTodo props (HTML-like prop)
function TodoForm({ addTodo }) {
    // Need a state to keep track of input from the user
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    // need a function to handle when the user types in input of todo so we can 
    // keep track of the state

    // function to update tasks
    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value })
    }


    // handle submit 
    function handleSubmit(e) {
        e.preventDefault();
        // trimming the unnecessary white spaces on both sides of the string
        // if todo.task is not empty - there is a description of task
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            //reset task input
            setTodo({ ...todo, task: "" });
        }
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit" >Submit</Button>
        </form>
    )

}

export default TodoForm;