import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Kaori's Todo List</h1>
      <div className="todo-input">
        <form>
          <input type="text" placeholder="What do I have to do today?" />
          <button className="add-task-btn">Add Task</button>
          <select>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </form>
      </div>
      <div className="todo-list">
        <ul>
          <li>
            <div className="todo-list">
              <p>First Todo</p>
              <div className="box-container">
                <div className="todo-box check">✓</div>
                <div className="todo-box delete">✕</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
