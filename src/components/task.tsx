import styles from './task.module.css'

import { Trash } from 'phosphor-react'

export interface TaskProps {
   id: number
   content: string
   isChecked: boolean
   onToggleCheckbox:(taskId: number) => void
}

export function Task({ id, content, isChecked, onToggleCheckbox }: TaskProps) {
   function handleToggleCheckbox() {
      onToggleCheckbox(id)
   }

   return (
      <div className={styles.task}>
         <div className={styles.taskInfo}>
            <div className={styles.customCheckbox}>
               <input type="checkbox" id={`checkbox-${id}`} checked={isChecked} onChange={handleToggleCheckbox} />
               <label htmlFor={`checkbox-${id}`}></label>
            </div>

            <span className={ isChecked ? styles.taskInfoChecked : styles.taskInfo }>
               {content}
            </span>
         </div>

         <button>
            <Trash size={18} />
         </button>
      </div>
   )
}