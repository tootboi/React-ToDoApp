import React, { Component } from 'react';

class SubTodo extends Component {
    state = {
        content: this.props.todo.content,
        id: this.props.todo.id
    }
    //this does not update state of props (Todo.js state) or App.js state
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div className="subTodo">
                <span className="dragBtn"></span>
                <input type="text" className="dos" onChange={this.handleChange} onDoubleClick={this.props.createSub} value={this.state.content} autoFocus/>
                <span className="deleteBtn" onClick={() => {this.props.deleteSubTodo(this.state.id)}}>&times;</span>
            </div>
        );
    }
}

export default SubTodo;