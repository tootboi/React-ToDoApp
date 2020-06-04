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
                <input style={{ background: theme.bgColor, color: theme.todoColor}} 
                    type="text" 
                    className="dos" 
                    onChange={(e) => dispatch({type: 'EDIT_TODO', 
                        editTodo: {content: e.target.value, id: todo.id, subTodos: todo.subTodos}})}
                    value={todo.content}
                    onDoubleClick={() => dispatch({type: 'ADD_SUBTODO', id: todo.id})}
                />
                <span className="deleteBtn" onClick={() => dispatch({type: 'DELETE_TODO', id: todo.id})}>
                    &times;
                </span>
            </div>
            <SubTodoList subTodos={todo.subTodos} mainId={todo.id}/>
        </div>
    );
}
 
export default TodoDetails;