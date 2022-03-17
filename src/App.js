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
  const [countTodos, setCountTodos] = useState({});
  //run once
  useEffect(() => {
    getLocalTodos(); 
  }, [])
  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    limitTodoHandler();
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
  //STOP SI Déjà 10 choses à faire (mais si on décoche ca laisse décoché)
  const limitTodoHandler = () => {
    setCountTodos({1:0,2:0});
    for (const todo of todos) {
      if(todo.completed){
        setCountTodos(countTodos => ({
            [1]: countTodos[1]+1,
            [2]: countTodos[2]
        }));
      }else{
        setCountTodos(countTodos => ({
            [1]: countTodos[1],
            [2]: countTodos[2]+1
        }))
      }
   }
   console.log(countTodos)

 }
  //return 
  return (
    <div className="App">
      <header>
        <h1>Matt's todo list</h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} setTodos={setTodos}
      setStatus={setStatus}
      countTodos={countTodos}
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
