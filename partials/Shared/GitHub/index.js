import Link from 'next/link'
import styles from './styles.module.scss'
import { useEffect } from 'react';

export default function Hero() {
  
  useEffect(()=>{
    
  }, [])

  return (
    <section className={styles.container}>
      <h2 className={styles.title}> 
        Compartilhar o conhecimento e a experiência nos ajuda a ir mais longe. <br /> 
        Acesse aqui o código de meus principais projetos.
      </h2>
      <Link href={"https://github.com/jhonatan98rios"}>
        GitHub
      </Link>
    </section>
  )
}
