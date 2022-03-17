import './App.css';
import React, {useState, useEffect} from "react";
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // States
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once
  useEffect(() => {
    getLocalTodos(); 
  }, [])
  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos,status])
  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo)
    }
  }
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div class="App">
      <header>
        <h1>Matt's todo list</h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
