import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {content: 'buy milk'},
      {content: 'play games'}
    ]
  }
  deleteTodo = (index) => {
    const todos = this.state.todos.filter(function(todo, i) {
      return i !== index
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

  render() {
    return (
      <div className="todoApp container">
        <h1 className="center blue-text">To dos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;