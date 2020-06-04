import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';

const SubTodoDetails = ({subTodo, mainId}) => {
    const {dispatch} = useContext(TodoContext);
    const {isLightMode, light, dark} = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    return (
        <div className="subTodo">
            <span className="dragBtn"></span>
            <input style={{ background: theme.bgColor, color: theme.subColor}} 
                type="text" className="dos" 
                onChange={(e) => dispatch({type: 'EDIT_SUBTODO', editSubTodo: {content: e.target.value, id: subTodo.id, mainId: mainId}})} 
                value={subTodo.content} 
                autoFocus
                onDoubleClick={() => dispatch({type: 'ADD_SUBTODO', id: mainId})}
            />
            <span className="deleteBtn" onClick={() => dispatch({type:'DELETE_SUBTODO', ids:{mainId: mainId, subId: subTodo.id}})}>
                &times;
            </span>
        </div>
    );
}
 
export default SubTodoDetails;