import { useEffect } from 'react'
import styles from './styles.module.scss'

export default function ProjectList({card}) {

  return (
    <section 
      className={styles.container}
      style={{
        backgroundImage: `url(${card.background})`
      }}
    >
      <div className={styles.description}>
        <h3> {card.title} </h3>
        <p> {card.description} </p>
        <button onClick={ () => { console.log(card.github) } }>
          Visualizar
        </button>
      </div>
    </section>
  )
}
