import Todo from "../todo/Todo.jsx";
import React from "react";
import "./style.css";


const List = ({todos, setTodos}) => {
    
   
    const onChangeHandler = (id) => {
    setTodos(
        todos.map(todo => todo.id === id ?
            {...todo, isDone: !todo.isDone} : todo )
    )};
   
   const onRemoveHandler = (id) => {
    setTodos(
        todos.filter(todo => todo.id !== id)
    )};
   
   
    return(
        <div>
            <h1>진행중 🔥</h1>
            <div className ="warp">
            {todos.map
            (todo => !todo.isDone 
                ?<Todo 
                todo={todo} 
                key={todo.id}
                setTodos={setTodos}
                onRemoveHandler={onRemoveHandler}
                onChangeHandler={onChangeHandler} />
                
                :null
            )}
            </div>


            <h1>완료 🎉</h1>
            <div className ="warp"v>
            {todos.map
            (todo => todo.isDone 
                ?<Todo 
                todo={todo} 
                key={todo.id}
                setTodos={setTodos}
                onRemoveHandler={onRemoveHandler}
                onChangeHandler={onChangeHandler} />
                
                :null
            )}
            </div>
        </div>
    );


};


export default List;