import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {
    const {todos} = useContext(TodoContext);
    return todos.length ? (
        <div className="todoList">
            {todos.map(todo => {
                return (<TodoDetails todo={todo} key={todo.id}/>);
            })}
        </div>
    ) : (
        <div className='todo center'>/ / /</div>
    );
}
 
export default TodoList;