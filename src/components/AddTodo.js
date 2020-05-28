import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { v1 as uuidv1 } from 'uuid';

class AddTodo extends Component {
    static contextType = ThemeContext;
    state = {
        content: '',
        id: '',
        subTodos: []
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            id: uuidv1()
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //prevents todos with only whitespaces.
        if(this.state.content.replace(/\s/g, '') !== '') {
            this.props.addTodo(this.state);
            this.setState({
            content: ''
        })
        }
    }

    render(){
        const {isLightMode, light, dark} = this.context;
        const theme = isLightMode ? light : dark;
        return (
            <div className='form' style={{ background: theme.bgColor, color: theme.subColor}}>
                <form action="" onSubmit={this.handleSubmit}>
                    <input required style={{ background: theme.bgColor, color: theme.subColor}} type="text" className="userInput" placeholder="Add a to do" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;