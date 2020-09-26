import Link from 'next/link'
import styles from './styles.module.scss'

export default function Hero() {

  return (
    <section className={styles.container}>
      <div className={`is-hidden-desktop ${styles.navbarBurger}`}>
        <div />
        <div />
        <div />
      </div>
      <ul className={styles.navbarList}>
        <Link href="/#home-hero">
          <li>
            Inicio
          </li>
        </Link>
        <Link href="/#home-technologies">
          <li>
            Tecnologias
          </li>
        </Link>
        <Link href="/projetos">
          <li>
            Projetos
          </li>
        </Link>
      </ul>
    </section>
  )
}
