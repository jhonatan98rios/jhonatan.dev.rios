import Link from 'next/link'
import styles from './styles.module.scss'
import { useEffect } from 'react';

export default function Footer() {
  
  useEffect(()=>{
    
  }, [])

  return (
    <section className={styles.container}>
      <ul className={styles.socialList}>

        <li className={styles.socialLink}> 
          <Link href={"https://www.instagram.com/jhonatan.teixeira.rios/?hl=pt-br"}>
            <a target="_blank">
              <img alt="Instagram" srcSet="./social/instagram.png"/> 
            </a>
          </Link>
        </li>

        <li className={styles.socialLink}> 
          <Link href={"https://www.youtube.com/channel/UCO0Wn-Pd5Y5ELJ7Nrl2SVLQ"}>
            <a target="_blank">
              <img alt="Youtube" srcSet="./social/youtube.png"/> 
            </a>
          </Link>
        </li>

        <li className={styles.socialLink}> 
          <Link href={"https://www.linkedin.com/in/jhonatan-teixeira-rios-499400128/"}>
            <a target="_blank">
              <img alt="Linkedin" srcSet="./social/linkedin.png"/> 
            </a>
          </Link>
        </li>

      </ul>
    </section>
  )
}
