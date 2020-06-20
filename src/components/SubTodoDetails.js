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
        //these lines focus the cursor to the end of the textarea.
        const textarea = document.getElementById('overlay'+subTodo.id).children[0].children[2].children[0];
        textarea.value = '';
        textarea.value = subTodo.content;
        textarea.focus();
    }
    const addSubTodo = (e) => {
        document.getElementById('createSub'+mainId).style.display = 'block';
        //focuses overlay textarea
        document.getElementById('createSub'+mainId).children[0].children[2].children[0].focus();
    }
    return (
        <div className="subTodo">
            <div className="overlayContainer">
                <div id={'overlay'+subTodo.id}>
                    <SubTodoOverlay todo={subTodo} mainId={mainId}/>
                </div>
            </div>
            <div className="subTodoContainer" style={{ background: theme.bgColor, color: theme.todoColor}}>
                <span className="dragBtn" onClick={addSubTodo}></span>
                <span className='todoContent' onClick={overlayOn}>{subTodo.content}</span> 
                <span className="deleteBtn" onClick={() => dispatch({type:'DELETE_SUBTODO', ids:{mainId: mainId, subId: subTodo.id}})}>
                    &times;
                </span>
            </div>
        </div>
    );
}
 
export default SubTodoDetails;