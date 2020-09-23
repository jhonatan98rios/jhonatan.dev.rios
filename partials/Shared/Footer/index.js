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
            <img alt="Instagram" srcSet="./social/instagram.png"/> 
          </Link>
        </li>

        <li className={styles.socialLink}> 
          <Link href={"https://www.youtube.com/channel/UCO0Wn-Pd5Y5ELJ7Nrl2SVLQ"}>
            <img alt="Youtube" srcSet="./social/youtube.png"/> 
          </Link>
        </li>

        <li className={styles.socialLink}> 
          <Link href={"https://www.linkedin.com/in/jhonatan-teixeira-rios-499400128/"}>
            <img alt="Linkedin" srcSet="./social/linkedin.png"/> 
          </Link>
        </li>

      </ul>
    </section>
  )
}
