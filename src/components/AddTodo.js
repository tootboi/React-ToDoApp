import React, { useState, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { v1 as uuidv1 } from 'uuid';

const AddTodo = (props) => {
    const [todo, setTodo] = useState({
        content: '',
        id: '',
        subTodos: []
    })
    const handleChange = (e) => {
        setTodo({
            content: e.target.value,
            id: uuidv1(),
            subTodos: []
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //prevents todos with only whitespaces.
        if(todo.content.replace(/\s/g, '') !== '') {
            props.addTodo(todo);
            setTodo({
                content: '',
                id: '',
                subTodos: []
            })
        }
    }
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className='form' style={{ background: theme.bgColor, color: theme.subColor}}>
            <form action="" onSubmit={handleSubmit}>
                <input required style={{ background: theme.bgColor, color: theme.subColor}} type="text" className="userInput" placeholder="Add a to do" onChange={handleChange} value={todo.content}/>
            </form>
        </div>
    );
}
 
export default AddTodo;