import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: '',
        id: '',
        subTodos: []
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            id: Date.now()
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content.replace(/\s/g, '') !== '') {
            this.props.addTodo(this.state);
            this.setState({
            content: ''
        })
        }
    }

    render(){
        return (
            <div className='form'>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" className="userInput" placeholder="Add a to do" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;