import './global.css'
import styles from './app.module.css'

import { Header } from './components/header'
import { Input } from './components/input'
import { ButtonCreateTask } from './components/buttonCreateTask'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.addNewTask}>
        <Input />
        <ButtonCreateTask />
      </div>
    </div>
  )
}