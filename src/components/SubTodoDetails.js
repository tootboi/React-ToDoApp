import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';

const SubTodoDetails = ({subTodo}) => {
    const {dispatch} = useContext(TodoContext);
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className="subTodo">
            <span className="dragBtn"></span>
            <input style={{ background: theme.bgColor, color: theme.subColor}} type="text" className="dos" value={subTodo.content} autoFocus/>
            <span className="deleteBtn" >&times;</span>
        </div>
    );
}
 
export default SubTodoDetails;