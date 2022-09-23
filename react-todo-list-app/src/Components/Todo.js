import React from 'react'

export default function Todo({todoList, setTodoList, todo}) {
  const deleteHandler = () => {
    setTodoList(todoList.filter(val => val.id !== todo.id))
  }
  const completeHandler = () => {
    setTodoList(todoList.map(val => {
      if(val.id === todo.id) {
        return {
          ...val,
          completed: !val.completed
        }
      } return val;
    }))
  }
  return (
    <div>
      <li className="todo-list">
            <div className="todo-list">
              <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
              <div className="box-container">
                <div className="todo-box check" onClick={completeHandler}>✓</div>
                <div className="todo-box delete" onClick={deleteHandler}>✕</div>
              </div>
            </div>
          </li>
    </div>
  )
}
