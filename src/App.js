import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {content: "Implement sub-todo", id:"unique2"},
        {content: "Animation for deleting (strikethorugh and fade)", id:"unique3"},
        {content: "Drag and drop re-ordering", id:"unique4"},
      ]
    }
    this.deleteTodo = this.deleteTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }

  deleteTodo = (deleteId) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== deleteId
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
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
        <h1>To dos</h1>
        <div className="container">
          {this.state.todos.length ? (
            this.state.todos.map(todo => (
              <Todo key={todo.id} todo={todo.content} id={todo.id} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
            ))
          ) : (
            <div className='todo center'>/ / /</div>
          )}
        </div>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;