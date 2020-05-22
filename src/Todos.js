import React from 'react';

function Todos({todos, deleteTodo}) {
    const todoList = todos.length ? (
        todos.map(function(todo, index) {
            return (
                <div className="todo" key={index}>
                    <span className="dragBtn"></span>
                    <span>{todo.content}</span>
                    <span className="deleteBtn" onClick={() => {deleteTodo(index)}}>&times;</span>
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