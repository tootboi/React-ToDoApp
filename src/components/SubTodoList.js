import React, { useContext } from 'react';
import SubTodoDetails from './SubTodoDetails';

const SubTodoList = ({subTodos, mainId}) => {
    return subTodos.length ? (
        <div className="subTodoList">
            {subTodos.map(subTodo => {
                return (<SubTodoDetails subTodo={subTodo} key={subTodo.id}/>);
            })}
        </div>
    ) : (
        <div></div>
    );
}
 
export default SubTodoList;