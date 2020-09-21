import Link from 'next/link'
import styles from './styles.module.scss'

export default function Hero() {

  return (
    <div className={styles.container}>
      <div className={`is-hidden-desktop ${styles.navbarBurger}`}>
        <div />
        <div />
        <div />
      </div>
      <ul className={styles.navbarList}>
        <li>
          <Link href={'./'}> Item 1 </Link>
        </li>

        <li> Item 2 </li>
        <li> Item 3 </li>
        <li> Item 4 </li>
      </ul>
    </div>
  )
}
