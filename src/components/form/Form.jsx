import React from "react";
import "./style.css";

const Form = () => {

    return (
        <form className ="add-form">
            <div className ="input-group">
                <label>제목</label>
                <input></input>
                <label>내용</label>
                <input></input>
            </div>
            <button>추가하기</button>
        </form>
    );
};

export default Form;