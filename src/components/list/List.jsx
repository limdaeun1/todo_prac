import Todo from "../todo/Todo.jsx";
import React from "react";


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
            <h1>하는중..</h1>
            <div>
            {todos.map
            (todo => todo.isDone === false
                ?<Todo 
                todo={todo} 
                key={todo.id}
                setTodos={setTodos}
                onRemoveHandler={onRemoveHandler}
                onChangeHandler={onChangeHandler} />
                
                :null
            )}
            </div>


            <h1>완료!</h1>
            <div>
            {todos.map
            (todo => todo.isDone === true
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