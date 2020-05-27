import React, { Component } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {content: "Implement sub-todo", id:"unique2", 
          subTodos: [
            {content: "Like this", id: "unique2-1"},
            {content: "And this", id: "unique2-2"}
          ]},
        {content: "Animation for deleting (strikethorugh and fade)", id:"unique3", 
          subTodos: [

          ]},
        {content: "Drag and drop re-ordering", id:"unique4", 
          subTodos: [

          ]},
      ]
    }
    this.deleteTodo = this.deleteTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }

  deleteTodo = (deleteId) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== deleteId
    })
    this.setState({
      todos: todos
    })
  }
      //may need this to update App.js state
  // deleteSubTodo = (parentTodoId, subTodoId) => {
  //   let todos = this.state.todos
  //   let parentIndex = ''
  //   let subTodos = []
  //   todos.forEach(function(parentTodo, index) {
  //     if(parentTodo.id === parentTodoId) {
  //       parentIndex = index
  //       subTodos = parentTodo.subTodos
  //     }
  //   })
  //   subTodos = subTodos.filter(todo => {
  //     return todo.id !== subTodoId
  //   })
  //   todos[parentIndex].subTodos = subTodos
  //   console.log(todos)
  //   this.setState({ 
  //     todos: todos
  //   })
  // }
  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
      //may need this to update App.js state
  // addSubTodo = (parentTodoId, subTodo) => {
  //   const todos = this.state.todos
  //   todos.forEach(function(parentTodo) {
  //     if(parentTodo.id === parentTodoId) {
  //       parentTodo.subTodos.push(subTodo)
  //     }
  //   })
  //   this.setState({
  //     todos: todos
  //   })
  // }
  editTodo = (newContent, editId) => {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === editId) {
        return todo = {content: newContent, id: todo.id}
      } else {
        return todo
      }
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todoApp">
        <ThemeContextProvider>
        <h1>To dos</h1>
        <ThemeToggle/>
        <div className="container">
          {this.state.todos.length ? (
            this.state.todos.map(todo => (
              <Todo key={todo.id} 
                    todo={todo.content} 
                    id={todo.id} 
                    subTodos={todo.subTodos}
                    deleteTodo={this.deleteTodo} 
                    editTodo={this.editTodo}
              />
            ))
          ) : (
            <div className='todo center'>/ / /</div>
          )}
        </div>
        <AddTodo addTodo={this.addTodo}/>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;