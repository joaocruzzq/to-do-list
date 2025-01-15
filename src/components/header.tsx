import styles from './header.module.css'

import todoListLogo from "../assets/todo-logo.svg"

export function Header() {
   return (
      <div className={styles.header}>
         <img src={todoListLogo} />
         <h1>to<span>do</span></h1>
      </div>
   )
}