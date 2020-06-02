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
        default:
            return state
    }
}