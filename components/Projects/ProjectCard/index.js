import Link from 'next/link'
import styles from './styles.module.scss'

export default function ProjectList({card}) {

  return (
    <section 
      className={styles.container}
      style={{
        backgroundImage: `url(${card.background || './projects/default.png'})`,
        filter: `drop-shadow(0px 0px 5px ${card.color})`
      }}
    >
      <div 
        className={styles.description}
        style={{
          backgroundColor: card.color
        }}
      >
        <h3 className="subtitle"> {card.title} </h3>
        <p className="paragraph"> {card.description} </p>
        
        {
          card.link && (
            <Link href={card.link}>
              <a className={`paragraph ${styles.button}`} target="_blank"> Visualizar </a>
            </Link>
          )
        }

        {
          card.github && (
            <Link href={card.github}>
              <a className="paragraph" target="_blank"> Código Fonte </a>
            </Link>
          )
        }
        
      </div>
    </section>
  )
}
