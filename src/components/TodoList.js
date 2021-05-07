import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        // todos.map = for each item in todos
        // each item in todos needs to contain a key
        <List>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete}
                    removeTodo={removeTodo} />
            ))}
        </List>
    )
}

export default TodoList;