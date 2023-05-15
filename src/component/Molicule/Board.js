


import styles from './Board.module.css'
import ToDo from './Todo'
export default function Board(){
    return(
       <div className={styles.board}>
        <ToDo />
       </div>
    )
}