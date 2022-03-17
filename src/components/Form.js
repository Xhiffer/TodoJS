import React from 'react'

function Form({inputText,setInputText,setTodos,todos, setStatus}){
    //js code
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
        ...todos, {text:inputText, completed:false, id:Math.random()*100}])
        setInputText('')
    }
    const statusHadler = (e) =>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plys-square"></i>
            </button> 
            <div className="select">
                <select onChange={statusHadler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">COMPLETED</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;