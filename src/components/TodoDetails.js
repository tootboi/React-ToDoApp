import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';
import SubTodoList from './SubTodoList';

const TodoDetails = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className="todo" style={{ background: theme.bgColor, color: theme.todoColor}}>
            <div className="mainTodo">
                <span className="dragBtn"></span>
                <input style={{ background: theme.bgColor, color: theme.todoColor}} type="text" className="dos" value={todo.content}/>
                <span className="deleteBtn" onClick={() => dispatch({type: 'DELETE_TODO', id: todo.id})}>&times;</span>
            </div>
            <SubTodoList subTodos={todo.subTodos} mainId={todo.id}/>
        </div>
    );
}
 
export default TodoDetails;