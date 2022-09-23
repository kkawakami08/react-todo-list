import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList, setTodoList}) {
  return (
      <div className="todo-list">
        <ul>
          {todoList.map(todoItem => (<Todo key={todoItem.id} todo={todoItem} setTodoList={setTodoList} todoList={todoList}/>))}
        </ul>
      </div>
  )
}
