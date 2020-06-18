import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';
import SubTodoOverlay from './SubTodoOverlay';

const SubTodoDetails = ({subTodo, mainId}) => {
    const {dispatch} = useContext(TodoContext);
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;

    const overlayOn = (e) => {
        document.getElementById('overlay'+subTodo.id).style.display = 'block';
    }
    return (
        <div className="subTodo">
            <div className="overlayContainer">
                <div id={'overlay'+subTodo.id}>
                    <SubTodoOverlay todo={subTodo} mainId={mainId}/>
                </div>
            </div>
            <div className="subTodoContainer" style={{ background: theme.bgColor, color: theme.todoColor}} onDoubleClick={() => dispatch({type: 'ADD_SUBTODO', id: mainId})}>
                <span className="dragBtn" onClick={overlayOn}></span>
                <span className='todoContent'>{subTodo.content}</span> 
                <span className="deleteBtn" onClick={() => dispatch({type:'DELETE_SUBTODO', ids:{mainId: mainId, subId: subTodo.id}})}>
                    &times;
                </span>
            </div>
        </div>
    );
}
 
export default SubTodoDetails;