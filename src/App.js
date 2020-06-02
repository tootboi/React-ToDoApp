import React, { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [todoList, setTodos] = useState({
    todos: [
      {content: "Implement sub-todo", id:"unique2", 
        subTodos: [
          {content: "Like this", id: "unique2-1"},
          {content: "Double click to add a sub-todo", id: "unique2-2"}
        ]},
      {content: "Animation for deleting (strikethorugh and fade)", id:"unique3", 
        subTodos: [

        ]},
      {content: "Drag and drop re-ordering", id:"unique4", 
        subTodos: [

        ]},
    ]
  });
  const deleteTodo = (deleteId) => {
    const todos = todoList.todos.filter(todo => {
      return todo.id !== deleteId
    });
    setTodos({ todos:todos });
  }
  const addTodo = (todo) => {
    let todos = [...todoList.todos, todo];
    setTodos({ todos:todos });
  }
  const editTodo = (newContent, editId) => {
    const newTodos = todoList.todos.map(todo => {
      if(todo.id === editId) {
        return todo = {content: newContent, id: todo.id}
      } else {
        return todo
      }
    });
    setTodos({ todos:newTodos });
  }
  return (
    <div className="todoApp">
      <ThemeContextProvider>
      <h1>To dos</h1>
      <ThemeToggle/>
      <div className="container">
        {todoList.todos.length ? (
          todoList.todos.map(todo => (
            <Todo key={todo.id} 
                  todo={todo.content} 
                  id={todo.id} 
                  subTodos={todo.subTodos}
                  deleteTodo={deleteTodo} 
                  editTodo={editTodo}
            />
          ))
        ) : (
          <div className='todo center'>/ / /</div>
        )}
      </div>
      <AddTodo addTodo={addTodo}/>
      </ThemeContextProvider>
    </div>
  );
}
 
export default App;