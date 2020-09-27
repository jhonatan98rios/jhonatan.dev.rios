import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.scss'

export default function Navbar() {

  const [isOpen, setOpen] = useState(false)

  function toogleMenu(){
    setOpen(state => {
      return !state
    })
  }

  return (
    <section className={styles.container}>
      <div 
        className={`is-hidden-desktop ${styles.navbarBurger}`} 
        onClick={toogleMenu} 
      >
        <div/>
        <div/>
        <div/>
      </div>
      <ul className={`${styles.navbarList} ${ isOpen ? styles.isOpen : null}`}>
        <Link href="/#home-hero">
          <li className="subtitle" onClick={toogleMenu}>
            Inicio
          </li>
        </Link>
        <Link href="/#home-technologies">
          <li className="subtitle" onClick={toogleMenu}>
            Tecnologias
          </li>
        </Link>
        <Link href="/projetos">
          <li className="subtitle" onClick={toogleMenu}>
            Projetos
          </li>
        </Link>
      </ul>
    </section>
  )
}
