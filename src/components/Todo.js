import React, { useState, useContext } from 'react';
import SubTodo from './SubTodo';
import {ThemeContext} from '../contexts/ThemeContext';
import { v1 as uuidv1 } from 'uuid';

const Todo = (props) => {
    const [todo, setTodo] = useState({
        content: props.todo,
        id: props.id,
        subTodos: props.subTodos
    })
    const handleChange = (e) => {
        props.editTodo(e.target.value, todo.id)
        setTodo({
            content: e.target.value,
            id: props.id,
            subTodos: props.subTodos
        })
    }
    const createSub = (e) => {
        const subTodos = [...todo.subTodos, {content:'', id:uuidv1()}]
        setTodo({
            content: props.todo,
            id: props.id,
            subTodos: subTodos
        })
    }
    const deleteSubTodo = (deleteId) => {
        //this does not delete the subTodo from props (i.e. from App.js state)
        const subTodos = todo.subTodos.filter(todo => {
            return todo.id !== deleteId
        })
        setTodo({
            content: props.todo,
            id: props.id,
            subTodos: subTodos
        })
    }
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className="todo" style={{ background: theme.bgColor, color: theme.todoColor}}>
            <div className="mainTodo">
                <span className="dragBtn"></span>
                <input style={{ background: theme.bgColor, color: theme.todoColor}} type="text" className="dos" onChange={handleChange} onDoubleClick={createSub} value={todo.content}/>
                <span className="deleteBtn" onClick={() => {props.deleteTodo(props.id)}}>&times;</span>
            </div>
            <div className="subTodoList">
                {todo.subTodos.map(subTodo => (
                    <SubTodo 
                        key={subTodo.id} 
                        todo={subTodo}
                        handleChange={handleChange}
                        createSub={createSub}
                        deleteSubTodo={deleteSubTodo}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Todo;