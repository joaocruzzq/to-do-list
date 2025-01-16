import styles from './task.module.css'

import { Trash } from 'phosphor-react'

import { useState } from 'react'

export function Task() {
   const [isChecked, setIsChecked] = useState(false);

   function handleToggleCheckbox() {
      setIsChecked((prevState) => !prevState)
   }

   return (
      <div className={styles.task}>
         <div className={styles.taskInfo}>
            <div className={styles.customCheckbox}>
               <input type="checkbox" id="checkbox" checked={isChecked} onClick={handleToggleCheckbox} />
               <label htmlFor="checkbox"></label>
            </div>

            <span className={ isChecked ? styles.taskInfoChecked : styles.taskInfo }>
               Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </span>
         </div>

         <button>
            <Trash size={18} />
         </button>
      </div>
   )
}