import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList, setTodoList,status, filteredTodos}) {
  return (
      <div className="todo-list">
        <ul>
          {filteredTodos.map(todoItem => (<Todo key={todoItem.id} todo={todoItem} setTodoList={setTodoList} todoList={todoList} status={status}/>))}
        </ul>
      </div>
  )
}
