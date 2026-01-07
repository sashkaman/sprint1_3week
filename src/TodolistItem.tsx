// import { useRef, useState } from 'react'
import { useState } from 'react'
import type { FilterValues, Task } from './App'
import { Button } from './Button'

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: string) => void
  changeFilter: (filter: FilterValues) => void
  createTask: (title: string) => void
}

export const TodolistItem = ({
  title,
  tasks,
  deleteTask,
  changeFilter,
  createTask }: Props) => {
  const [taskTitle, setTaskTitle] = useState('')
  // const inputRef = useRef<HTMLInputElement>(null)

  const createTaskHandler = () => {
    createTask(taskTitle)
    setTaskTitle('')
  }

  return (
    <div>
      <h3>{title}</h3>

      <div>
        {/* <input ref={inputRef} />
        <Button title={'+'} onClick={() => {
          if (inputRef.current) {t.value)
            inputRef.current.value = 
            createTask(inputRef.curren''
          }
        }} /> */}
        <input
          value={taskTitle}
          onChange={event => setTaskTitle(event.currentTarget.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              createTaskHandler()
            }
          }}
        />

        <Button
          title={'add'}
          onClick={createTaskHandler}
        />
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map(task => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>c
                <Button title={'x'} onClick={() => deleteTask(task.id)} />
              </li>
            )
          })}
        </ul>
      )}
      <div>
        <Button title={'All'} onClick={() => changeFilter('all')} />
        <Button title={'Active'} onClick={() => changeFilter('active')} />
        <Button title={'Completed'} onClick={() => changeFilter('completed')} />
      </div>
    </div>
  )
}
