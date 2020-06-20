import React, { createContext, useReducer, useEffect } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const[todos, dispatch] = useReducer(TodoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [
        {content: "Add sub-todos by clicking on the bullet points", id:"unique2", 
            subTodos: [
                {content: "Like this", id: "unique2-1"},
            ]},
        {content: "Edit todos by clicking on it", id:"unique3", 
            subTodos: [
                {content: "Also edit sub-todos by clicking on it", id: "unique3-1"},
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