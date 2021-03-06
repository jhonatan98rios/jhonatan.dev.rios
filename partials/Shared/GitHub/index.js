import Link from 'next/link'
import styles from './styles.module.scss'

export default function Hero({content}) {

  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} subtitle`}> 
        {content}
      </h2>
      <Link href={"https://github.com/jhonatan98rios"}>
        <a className="subtitle" target="_blank">
          GitHub
        </a>
      </Link>
    </section>
  )
}
