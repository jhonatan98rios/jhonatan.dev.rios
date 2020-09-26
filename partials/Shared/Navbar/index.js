import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.scss'

export default function Navbar() {

  const [isOpen, setOpen] = useState(false)

  return (
    <section className={styles.container}>
      <div 
        className={`is-hidden-desktop ${styles.navbarBurger}`} 
        onClick={()=>{ setOpen(state => {
          return !state
        })}} 
      >
        <div/>
        <div/>
        <div/>
      </div>
      <ul className={`${styles.navbarList} ${ isOpen ? styles.isOpen : null}`}>
        <Link href="/#home-hero">
          <li className="subtitle">
            Inicio
          </li>
        </Link>
        <Link href="/#home-technologies">
          <li className="subtitle">
            Tecnologias
          </li>
        </Link>
        <Link href="/projetos">
          <li className="subtitle">
            Projetos
          </li>
        </Link>
      </ul>
    </section>
  )
}
