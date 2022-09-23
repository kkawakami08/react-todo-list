import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React, {useState} from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([{
    text: "First Todo",
    completed: false,
    id: Math.random() *1000
  }])
  return (
    <div className="container">
      <h1>Kaori's Todo List</h1>
        <Form inputText={inputText} setInputText={setInputText} setTodoList={setTodoList} todoList={todoList}/>
        <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
