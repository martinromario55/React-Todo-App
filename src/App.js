import { useState, useEffect } from 'react'

import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'

import './App.css'

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem('tasklist')) || []
  )

  // Store content in the local storage
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist))
  })

  const [task, setTask] = useState({})

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  )
}

export default App
