import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="container">
      <h1>Kaori's Todo List</h1>
        <Form />
        <TodoList />
    </div>
  );
}

export default App;
