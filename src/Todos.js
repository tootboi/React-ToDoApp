import React from 'react';

function Todos({todos, deleteTodo}) {
    const todoList = todos.length ? (
        todos.map(function(todo, index) {
            return (
                <div className="todo" key={index}>
                    <span onClick={() => {deleteTodo(index)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div className='todo center'>No to dos</div>
    )
    return (
        <div className="">
            {todoList}
        </div>
    )
}

export default Todos;