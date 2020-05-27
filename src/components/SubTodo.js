import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class SubTodo extends Component {
    static contextType = ThemeContext;
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
        const {isLightMode, light, dark} = this.context;
        const theme = isLightMode ? light : dark;
        return (
            <div className="subTodo">
                <span className="dragBtn"></span>
                <input style={{ background: theme.bgColor, color: theme.subColor}} type="text" className="dos" onChange={this.handleChange} onDoubleClick={this.props.createSub} value={this.state.content} autoFocus/>
                <span className="deleteBtn" onClick={() => {this.props.deleteSubTodo(this.state.id)}}>&times;</span>
            </div>
        );
    }
}

export default SubTodo;