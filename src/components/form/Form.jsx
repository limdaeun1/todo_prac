import React, {useState} from "react";
import "./style.css";

const Form = ({todos, setTodos, newTodo}) => {

   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   
  

    
 
    return (
        <>
        <form className ="add-form">
            <div className ="input-group">
                <label>제목</label>
                <input type="text" value={title} onChange={(event)=>{setTitle(event.target.value);}}>
                </input>
                <label>내용</label>
                <input type="text" value={body} onChange={(event)=>{setBody(event.target.value);}}>
                </input>    
            </div>
            
            <button onClick={()=>newTodo(title,body)}>
                
                추가하기</button>
        </form>
        </>
    );
};

export default Form;