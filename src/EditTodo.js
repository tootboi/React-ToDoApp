import React, { Component } from 'react';

class EditTodo extends Component {
    state = {
        content: this.props.todo.content
    }
    handleChange = (e) => {
        this.props.editTodo(e.target.value, this.props.index)
        this.setState({
            content: e.target.value
        })
    }
    handleClick = (e) => {
        this.props.deleteTodo(this.props.index)
    }

    render() {
        return (
            <div className="todo">
                <span className="dragBtn"></span>
                <input type="text" className="dos" onChange={this.handleChange} value={this.state.content}/>
                <span className="deleteBtn" onClick={this.handleClick}>&times;</span>
            </div>
        );
    }
}

export default EditTodo;