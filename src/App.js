import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

const App = () => {
  return (
    <div className="todoApp">
      <ThemeContextProvider>
        <h1>To dos</h1>
        <ThemeToggle/>
        <TodoContextProvider>
          <div className="container">
            <TodoList/>
          </div>
          <AddTodo/>
        </TodoContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
 
export default App;