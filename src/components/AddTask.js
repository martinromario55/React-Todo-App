import React from 'react'

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = e => {
    e.preventDefault()

    if (task.id) {
      // if the task is not empty, EDIT Task

      const date = new Date()
      const updatedTasklist = tasklist.map(todo =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      )
      setTasklist(updatedTasklist)
      setTask({})
    } else {
      // if task is empty, ADD New Task
      const date = new Date()
      // console.log(e.target.task.value)
      // console.log(date.getTime())
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      }
      setTasklist([...tasklist, newTask])
      setTask({})
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id=""
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={task.name || ''}
          onChange={e => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  )
}
