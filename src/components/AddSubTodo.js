import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';

const AddSubTodo = ({id}) => {
    const { dispatch } = useContext(TodoContext);
    const [newTodo, setTodo] = useState('');
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;

    const createSubTodo = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_SUBTODO', createSubTodo: {content: newTodo, mainId: id}});
        setTodo('');
        overlayOff();
    }
    const overlayOff = (e) => {
        document.getElementById('createSub'+id).style.display = 'none';
    }
    return (
        <div className="overlay" style={{ background: theme.bgColor, color: theme.todoColor}}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <h2>create sub-todo</h2>
            <form action="" onSubmit={createSubTodo}>
                <textarea name="newTodo" id="" cols="30" rows="10" value={newTodo} onChange={(e) => setTodo(e.target.value)} required style={{color: theme.todoColor}}></textarea>
                <input type="submit" value="create sub-todo" style={{color: theme.todoColor}}/>
            </form>
        </div>
    );
}
 
export default AddSubTodo;