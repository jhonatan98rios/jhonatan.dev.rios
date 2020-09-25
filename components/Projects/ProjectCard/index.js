import { useEffect } from 'react'
import styles from './styles.module.scss'

export default function ProjectList({card}) {

  return (
    <section 
      className={styles.container}
      style={{
        backgroundImage: `url(${card.background || './projects/default.jpg'})`
      }}
    >
      <div 
        className={styles.description}
        style={{
          backgroundColor: card.color
        }}
      >
        <h3> {card.title} </h3>
        <p> {card.description} </p>
        <button onClick={ () => { console.log(card.github) } }>
          Visualizar
        </button>
      </div>
    </section>
  )
}
