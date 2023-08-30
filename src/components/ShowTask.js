import React from 'react'

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = id => {
    const selectedTask = tasklist.find(todo => todo.id === id)
    // console.log(selectedTask)
    setTask(selectedTask)
  }

  const handleDelete = id => {
    // console.log('delete', id)
    const updatedTaskList = tasklist.filter(todo => todo.id !== id)
    setTasklist(updatedTaskList)
  }

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </span>
      </p>
      <ul>
        {tasklist.map(todo => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(todo.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  )
}
