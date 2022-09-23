import React from 'react'

export default function Form({inputText, setInputText, todoList, setTodoList}) {
  const handleChange = (event) => {
    setInputText(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, {
      text: inputText,
      completed: false,
      id: Math.random() * 1000
    }])
    setInputText("");
  }
  return (
    <div className="todo-input">
      <form>
          <input value={inputText} type="text" placeholder="What do I have to do today?" onChange={handleChange}/>
          <button onClick={handleSubmit} className="add-task-btn">Add Task</button>
          <select name="todo-list">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </form>
    </div>
  )
}
