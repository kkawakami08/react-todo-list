import React from 'react'

export default function Todo({todo}) {
  return (
    <div>
      <li>
            <div className="todo-list">
              <p>{todo.name}</p>
              <div className="box-container">
                <div className="todo-box check">✓</div>
                <div className="todo-box delete">✕</div>
              </div>
            </div>
          </li>
    </div>
  )
}
