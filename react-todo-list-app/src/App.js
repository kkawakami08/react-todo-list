import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React, {useState, useEffect} from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([])
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todoList.filter(todo => todo.completed ));
        break;
      case "incomplete":
        setFilteredTodos(todoList.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todoList);
        break;
    }
  }


  useEffect(() => {
    filterHandler();

  },[status,todoList])

 

  return (
    <div className="container">
      <h1>Kaori's Todo List</h1>
        <Form inputText={inputText} setInputText={setInputText} setTodoList={setTodoList} todoList={todoList} setStatus={setStatus} />
        <TodoList setTodoList={setTodoList} todoList={todoList} status={status} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
