import React from 'react';

function Todos({todos, deleteTodo}) {
    const todoList = todos.length ? (
        todos.map(function(todo, index) {
            return (
                <div className="collection-item" key={index}>
                    <span onClick={() => {deleteTodo(index)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">No to dos</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;