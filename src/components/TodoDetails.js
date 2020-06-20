import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';
import SubTodoList from './SubTodoList';
import TodoOverlay from './TodoOverlay';
import AddSubTodo from './AddSubTodo';

const TodoDetails = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;

    const overlayOn = (e) => {
        document.getElementById('overlay'+todo.id).style.display = 'block';
        //these lines focus the cursor to the end of the textarea.
        const textarea = document.getElementById('overlay'+todo.id).children[0].children[2].children[0];
        textarea.value = '';
        textarea.value = todo.content;
        textarea.focus();
    }
    const addSubTodo = (e) => {
        document.getElementById('createSub'+todo.id).style.display = 'block';
    }
    return (
        <div className="todo" style={{ background: theme.bgColor, color: theme.todoColor}}>
            <div className="overlayContainer">
                <div id={'overlay'+todo.id}>
                    <TodoOverlay todo={todo}/>
                </div>
            </div>
            <div className="overlayContainer">
                <div id={'createSub'+todo.id}>
                    <AddSubTodo id={todo.id}/>
                </div>
            </div>
            <div className="mainTodo">     
                <div className='todoContainer' style={{ background: theme.bgColor, color: theme.todoColor}}>
                    <span className="dragBtn" onClick={addSubTodo}></span>
                    <span className='todoContent' onClick={overlayOn}>{todo.content}</span> 
                    <span className="deleteBtn" onClick={() => dispatch({type: 'DELETE_TODO', id: todo.id})}>
                        &times;
                    </span>
                </div>  
            </div>
            <SubTodoList subTodos={todo.subTodos} mainId={todo.id}/>
        </div>
    );
}
 
export default TodoDetails;