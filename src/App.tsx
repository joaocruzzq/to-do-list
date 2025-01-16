import './global.css'
import styles from './app.module.css'

import { Header } from './components/header'
import { Input } from './components/input'
import { ButtonCreateTask } from './components/buttonCreateTask'

import { ClipboardText } from 'phosphor-react'
import { Task } from './components/task'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.addNewTask}>
        <Input />
        <ButtonCreateTask />
      </div>

      <div className={styles.tasksList}>
        <header>
          <div className={styles.task}>
            <strong className={styles.created}>Tarefas criadas</strong>
            <span>0</span>
          </div>

          <div className={styles.task}>
            <strong className={styles.done}>Concluídas</strong>
            <span>0</span>
          </div>
        </header>

        <main className={styles.filledList}>
          <Task />
        </main>

        {/* <main className={styles.emptyList}>
          <ClipboardText size={58} />

          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br /> Crie tarefas e organize seus itens a fazer
          </span>
        </main> */}
      </div>
    </div>
  )
}