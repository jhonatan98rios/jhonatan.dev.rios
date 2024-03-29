import Link from 'next/link'
import styles from './styles.module.scss'

export default function ProjectsBanner() {

  return (
    <section className={styles.container} id={"projects"}>
      <h2 className="title"> Veja aqui alguns de meus projetos </h2>
      <Link href="/projects" legacyBehavior>
        <a className="subtitle">
          Projetos
        </a>
      </Link>
    </section> 
  )
}