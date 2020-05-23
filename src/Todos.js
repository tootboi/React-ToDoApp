import React from 'react';
import EditTodo from './EditTodo';

function Todos({todos, deleteTodo, editTodo}) {
    const todoList = todos.length ? (
        todos.map(function(todo, index) {
            return (
                <div className="todo" key={index}>
                    <EditTodo todo={todo} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
                </div>
            )
        })
    ) : (
        <div className='todo center'>/ / /</div>
    )
    return (
        <div className="">
            {todoList}
        </div>
    )
}

export default Todos;