import styles from './input.module.css'

export function Input({...props}) {
   return (
      <input type="text" className={styles.input} placeholder='Adicione uma nova tarefa' {...props} />
   )
}