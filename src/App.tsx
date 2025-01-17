import './global.css'
import styles from './app.module.css'

import { Task } from './components/task'
import { Input } from './components/input'
import { Header } from './components/header'
import { ButtonCreateTask } from './components/buttonCreateTask'

import { ClipboardText } from 'phosphor-react'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      isChecked: false,
      content: 'Adicionar funcionalidade de comentários'
    },
  
    {
      id: 2,
      isChecked: false,
      content: 'Adicionar funcionalidade de deletar comentários'
    },
  
    {
      id: 3,
      isChecked: false,
      content: 'Resolver problemas de ativação do checkbox'
    }
  ])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTaskInfo = {
      id: tasks.length + 1,
      content: newTask,
      isChecked: false,
    }

    setTasks([...tasks, newTaskInfo])

    setNewTask('')
  }

  function handleDeleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function toggleCheckbox(taskId: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('O campo não pode ficar vazio.')
  }

  return (
    <div>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.addNewTask}>
        <Input
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewInvalidTask}
          required
        />

        <ButtonCreateTask />
      </form>

      <div className={styles.tasksList}>
        <header>
          <div className={styles.task}>
            <strong className={styles.created}>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.task}>
            <strong className={styles.done}>Concluídas</strong>

            {
              tasks.filter((task) => task.isChecked).length > 0 ? (
                <span>{tasks.filter((task) => task.isChecked).length} de {tasks.length}</span>
              ) : (
                <span>0</span>
              )
            }
          </div>
        </header>

        {
          tasks.length > 0 ? (
            <main className={styles.filledList}>
              {tasks.map(task => {
                return (
                  <Task
                    id={task.id}
                    key={task.id}
                    content={task.content}
                    isChecked={task.isChecked}
                    onDeleteTask={handleDeleteTask}
                    onToggleCheckbox={toggleCheckbox}
                  />
                )
              })}
            </main>
          ) : (
            <main className={styles.emptyList}>
              <ClipboardText size={58} />

              <span>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br /> Crie tarefas e organize seus itens a fazer
              </span>
            </main>
          )
        }
        
      </div>
    </div>
  )
}