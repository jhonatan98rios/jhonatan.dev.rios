import Link from 'next/link'
import styles from './styles.module.scss'

export default function Hero({content}) {

  return (
    <section className={styles.container} id="social">
      <h2 className={`${styles.title} subtitle`}> 
        {content}
      </h2>
      <Link href={"https://github.com/jhonatan98rios"} legacyBehavior>
        <a className="subtitle" target="_blank">
          GitHub
        </a>
      </Link>
    </section>
  )
}
