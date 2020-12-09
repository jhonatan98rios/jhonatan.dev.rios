import styles from './styles.module.scss'

export default function Hero({content}) {

  return (
    <section className={styles.container} id={"fareja-fatos"}>
      <h2 className={styles.title}> { content.title } </h2>
      <p className={styles.description}> { content.description1 } </p>
      <p className={styles.description}> { content.description2 } </p>
      <a href={content.knowmore.href} target={content.knowmore.target} className={styles.button}>
        {content.knowmore.label}
      </a>
    </section>
  )
}
