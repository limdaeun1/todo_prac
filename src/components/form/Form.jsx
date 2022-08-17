import React, {useState} from "react";
import "./style.css";

const Form = ({todos, setTodos}) => {

   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   
   const newTodo = (title, body) => {
    const todo ={
        id: todos.length+1,
        title:title,
        body:body,
        isDone:false
    }
    setTodos([...todos, todo]);
}

    
 
    return (
        <div className="form">
        {/* <form className ="add-form"> */}
            <div className ="input-group">
                <label>제목</label>
                <input className="input" type="text" value={title} onChange={(event)=>{setTitle(event.target.value);}}>
                </input>
                <label>내용</label>
                <input className="input" type="text" value={body} onChange={(event)=>{setBody(event.target.value);}}>
                </input> 
                <button className="but" onClick={()=>newTodo(title,body)}>
                
                추가하기</button>   
            </div>
            
            
        {/* </form> */}
        </div>
    );
};

export default Form;