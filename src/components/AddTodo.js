import React, { useState, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = (props) => {
    const {dispatch} = useContext(TodoContext);
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content);
        //prevents todos with only whitespaces.
        if(content.replace(/\s/g, '') !== '') {
            console.log(content);
            dispatch({type: 'ADD_TODO', content: content});
            setContent('');
        }
    }
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className='form' style={{ background: theme.bgColor, color: theme.subColor}}>
            <form action="" onSubmit={handleSubmit}>
                <input required style={{ background: theme.bgColor, color: theme.subColor}} type="text" className="userInput" placeholder="Add a to do" onChange={(e) => setContent(e.target.value)} value={content}/>
            </form>
        </div>
    );
}
 
export default AddTodo;