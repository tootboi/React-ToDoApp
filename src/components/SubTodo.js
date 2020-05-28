import React, { useState, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const SubTodo = (props) => {
    const [todo, setTodo] = useState({
        content: props.todo.content,
        id: props.todo.id
    })
    const handleChange = (e) => {
        setTodo({
            content: e.target.value,
            id: props.todo.id
        })
    }
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className="subTodo">
            <span className="dragBtn"></span>
            <input style={{ background: theme.bgColor, color: theme.subColor}} type="text" className="dos" onChange={handleChange} onDoubleClick={props.createSub} value={todo.content} autoFocus/>
            <span className="deleteBtn" onClick={() => {props.deleteSubTodo(this.state.id)}}>&times;</span>
        </div>
    );
}
 
export default SubTodo;