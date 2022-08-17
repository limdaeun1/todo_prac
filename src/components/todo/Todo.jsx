import React from "react";
import "./style.css";

const Todo = () => {

    return (
        <div className ="todo-container">
            <div>
                <h2>리액트 공부하기</h2>
                <h3>리액트 기초를 공부해봅시다</h3>
            </div>
            <div>
                <button>삭제하기</button>
                <button>완료</button>
            </div>
        </div>
    );
};

export default Todo;