import React, { useState, useEffect } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

// useEffect - responds to a certain data in our code
/**
 * useEffect(() => {
 *  effect
 * 
 * return () => {
 *  clean up
 * }
 * }, [dependencyArray]); // this array is to determine if the Effect gets
 * fired off or not - if one or more variables in the array changes, the 
 * effect will be fired
 *  -  If the array is empty, effect only fired when the component is initially
 *  rendered
 * 
 */

function App() {
  const [todos, setTodos] = useState([])
  // every time todo data changes, we need to store new data in local storage

  useEffect(() => {
    // get the JSON key from useEffect below and change it to array of todos
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      console.log(storageTodos)
      setTodos(storageTodos);
    }
  }, []);

  /* set a new local storage key for a new element in the array whenever a todo task 
  is added, each todos array after changes will be assigned to a new JSON string 
  key 
  */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  // function to add todo to todoList
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      // map each element in array todos and check using if statement
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    // use filter function to see if id parameter matches todo.id, then the task 
    // will be removed from "todos" 
    setTodos(todos.filter(todo => todo.id !== id))
    return todos;
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;
