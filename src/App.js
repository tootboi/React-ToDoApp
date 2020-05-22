import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {content: "Editing existing todos"},
      {content: "Implement sub-todo"},
      {content: "Animation for deleting (strikethorugh and fade)"},
      {content: "Drag and drop re-ordering"},
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
      <div className="todoApp">
        <h1>To dos</h1>
        <div className="container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;