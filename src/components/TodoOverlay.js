import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';

const TodoOverlay = ({todo}) => {
    const { dispatch } = useContext(TodoContext);
    const [newTodo, setTodo] = useState(todo.content);
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;

    const editTodo = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_TODO', editTodo: {content: newTodo, id: todo.id, subTodos: todo.subTodos}});
        overlayOff();
    }
    const overlayOff = (e) => {
        document.getElementById('overlay'+todo.id).style.display = 'none';
    }
    return (
        <div className="overlay" style={{ background: theme.bgColor, color: theme.todoColor}}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <h1>edit todo</h1>
            <form action="" onSubmit={editTodo}>
                <textarea name="newTodo" id="" cols="30" rows="10" value={newTodo} onChange={(e) => setTodo(e.target.value)} required style={{color: theme.todoColor}}></textarea>
                <input type="submit" value="edit todo" style={{ background: theme.bgColor, color: theme.todoColor}}/>
            </form>
        </div>
    );
}
 
export default TodoOverlay;