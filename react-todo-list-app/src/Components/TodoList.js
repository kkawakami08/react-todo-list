import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList}) {
  return (
      <div className="todo-list">
        <ul>
          {todoList.map(todoItem => <Todo todo={todoItem}/>)}
        </ul>
      </div>
  )
}
