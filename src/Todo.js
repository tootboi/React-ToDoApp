import React, { Component } from 'react';
import SubTodo from './SubTodo';

class EditTodo extends Component {
    state = {
        content: this.props.todo,
        id: this.props.id,
        subTodos: this.props.subTodos
    }
    handleChange = (e) => {
        this.props.editTodo(e.target.value, this.state.id)
        this.setState({
            content: e.target.value
        })
    }
    createSub = (e) => {
        const subTodos = [...this.state.subTodos, {content:'', id:Date.now()}]
        this.setState({
            subTodos: subTodos
        })
    }
    deleteSubTodo = (deleteId) => {
        //this does not delete the subTodo from props (i.e. from App.js state)
        const subTodos = this.state.subTodos.filter(todo => {
            return todo.id !== deleteId
        })
        this.setState({
            subTodos: subTodos
        })
      }

    render() {
        return (
            <div className="todo">
                <div className="mainTodo">
                    <span className="dragBtn"></span>
                    <input type="text" className="dos" onChange={this.handleChange} onDoubleClick={this.createSub} value={this.state.content}/>
                    <span className="deleteBtn" onClick={() => {this.props.deleteTodo(this.props.id)}}>&times;</span>
                </div>
                <div className="subTodoList">
                    {this.state.subTodos.map(todo => (
                        <SubTodo 
                            key={todo.id} 
                            todo={todo}
                            handleChange={this.handleChange}
                            createSub={this.createSub}
                            deleteSubTodo={this.deleteSubTodo}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default EditTodo;