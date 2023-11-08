import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

export function Comment () {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/DanielRPTI.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Rosa</strong>
              <time title='' dateTime="2023-08-11 08:57:00">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}