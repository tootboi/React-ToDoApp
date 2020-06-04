import { v1 as uuidv1 } from 'uuid';

export const TodoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                content: action.content,
                id: uuidv1(),
                subTodos: []
            }]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'EDIT_TODO':
            return state.map(todo => {
                if(todo.id === action.editTodo.id) {
                    return todo = {content: action.editTodo.content, id: action.editTodo.id, subTodos: action.editTodo.subTodos}
                } else {
                    return todo
                }
            })
        case 'ADD_SUBTODO':
            return state.map(todo => {
                if(todo.id === action.id) {
                    return todo = {
                        content: todo.content,
                        id: todo.id,
                        subTodos: [...todo.subTodos, {
                            content: '',
                            id: uuidv1()
                        }]
                    }
                } else {
                    return todo
                }
            })
        case 'EDIT_SUBTODO':
            return state.map(todo => {
                if(todo.id === action.editSubTodo.mainId) {
                    return todo = {
                        content: todo.content,
                        id: todo.id,
                        subTodos: todo.subTodos.map(subTodo => {
                            if(subTodo.id === action.editSubTodo.id) {
                                return subTodo = {content: action.editSubTodo.content, id: action.editSubTodo.id}
                            } else {
                                return subTodo
                            }
                        })
                    }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}