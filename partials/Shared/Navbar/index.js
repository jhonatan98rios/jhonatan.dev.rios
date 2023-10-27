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
          <Link href="/#home" scroll={false} legacyBehavior>
            <a> Home </a> 
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="/#technologies" scroll={false} legacyBehavior>
            <a> Technologies </a>
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="/#projects" scroll={false} legacyBehavior>
            <a> Projects </a>
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="https://blog.jhonatan-dev-rios.com/" legacyBehavior>
            <a target="_blank"> Blog </a>
          </Link>
        </li>
        <li className="paragraph" onClick={toogleMenu}>
          <Link href="/#social" scroll={false} legacyBehavior>
            <a> Social </a>
          </Link>
        </li>
      </ul>
    </section>
  )
}
