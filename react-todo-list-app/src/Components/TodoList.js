import React from 'react'

export default function TodoList() {
  return (
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
  )
}
