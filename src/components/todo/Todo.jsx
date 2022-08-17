import React from "react";
import "./style.css";

const Todo = ({todo, setTodos, onRemoveHandler, onChangeHandler}) => {

    return (
        <div className ="todo-container">
            <div>
                <h2>{todo.title}</h2>
                <h3>{todo.body}</h3>
            </div>

            <div>
                <button onClick={()=> onRemoveHandler(todo.id)}>삭제하기</button>

                <button onClick={()=> onChangeHandler(todo.id)}>
                    {todo.isDone? "취소" : "완료"}</button>
            </div>
        </div>
    );
};

export default Todo;