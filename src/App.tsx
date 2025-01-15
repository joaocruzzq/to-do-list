import './global.css'
import styles from './app.module.css'

import { Header } from './components/header'
import { Input } from './components/input'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.addNewTask}>
        <Input />
      </div>
    </div>
  )
}