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
        <li>
          <Link href="/#home-hero">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/#home-technologies">
            Tecnologias
          </Link>
        </li>
        <li>
          <Link href="/projetos">
            Projetos
          </Link>
        </li>
      </ul>
    </section>
  )
}
