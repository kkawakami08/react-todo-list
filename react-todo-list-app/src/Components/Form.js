import React from 'react'

export default function Form() {
  return (
    <div className="todo-input">
      <form>
          <input type="text" placeholder="What do I have to do today?" />
          <button className="add-task-btn">Add Task</button>
          <select name="todo-list">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </form>
    </div>
  )
}
