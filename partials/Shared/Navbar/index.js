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
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="/#inicio" legacyBehavior>
            <a> Inicio </a> 
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="/#tecnologias" legacyBehavior>
            <a> Tecnologias </a>
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="/projetos" legacyBehavior>
            <a> Projetos </a>
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="https://jhonatan-dev-rios-blog.vercel.app/" legacyBehavior>
            <a target="_blank"> Blog </a>
          </Link>
        </li>
      </ul>
    </section>
  )
}
