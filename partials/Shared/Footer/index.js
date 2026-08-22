import Link from 'next/link'
import styles from './styles.module.scss'

export default function Footer() {
  
  return (
    <section className={styles.container}>
      <ul className={styles.socialList}>

        <li className={styles.socialLink}> 
          <Link href={"https://www.instagram.com/jhonatan.teixeira.rios/?hl=pt-br"} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <img alt="Instagram" src="/social/instagram.png"/> 
            </a>
          </Link>
        </li>

        <li className={styles.socialLink}> 
          <Link href={"https://www.youtube.com/channel/UCO0Wn-Pd5Y5ELJ7Nrl2SVLQ"} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <img alt="YouTube" src="/social/youtube.png"/> 
            </a>
          </Link>
        </li>

        <li className={styles.socialLink}> 
          <Link href={"https://www.linkedin.com/in/jhonatan-teixeira-rios-499400128/"} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <img alt="LinkedIn" src="/social/linkedin.png"/> 
            </a>
          </Link>
        </li>

      </ul>
    </section>
  )
}
