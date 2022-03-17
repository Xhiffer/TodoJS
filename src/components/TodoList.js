import React from 'react';
//import Components
import Todo from './Todo'

function TodoList({todos,setTodos, filteredTodos}){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo =>(
                    <Todo filteredTodos={filteredTodos} key={todo.id} text={todo.text} setTodos={setTodos} todos={todos}todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;