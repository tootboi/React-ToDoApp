import React, { createContext, useReducer, useEffect } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const[todos, dispatch] = useReducer(TodoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [
        {content: "Implement sub-todo", id:"unique2", 
            subTodos: [
                {content: "Like this", id: "unique2-1"},
                {content: "Double click to add a sub-todo", id: "unique2-2"}
            ]},
        {content: "Animation for deleting (strikethorugh and fade)", id:"unique3", 
            subTodos: [

            ]},
        {content: "Drag and drop re-ordering", id:"unique4", 
            subTodos: [

            ]},
        ];
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;