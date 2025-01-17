import styles from './buttonCreateTask.module.css'

import { PlusCircle } from 'phosphor-react'

export function ButtonCreateTask() {
   return (
      <button className={styles.buttonCreateTask} type='submit'>
         <span>Criar</span>
         <PlusCircle size={18} />
      </button>
   )
}