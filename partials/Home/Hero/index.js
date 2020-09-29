import styles from './styles.module.scss'
import TypeWriter from '../../../controllers/TypeWriter'
import { useEffect } from 'react';

export default function Hero() {

  const typeWriterEl = React.createRef()
  
  useEffect(()=>{

    const typeWriter = new TypeWriter()
    typeWriter.startWriter(typeWriterEl.current)

  }, [])

  return (
    <section className={styles.container} id={"home-hero"}>
      <h1 className={`${styles.title} title`} ref={typeWriterEl}> 
        "As pessoas que são loucas o suficiente para achar que podem mudar o mundo, são aquelas que o mudam" (Steve Jobs)
      </h1>
    </section>
  )
}
