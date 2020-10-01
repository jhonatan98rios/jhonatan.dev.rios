import styles from './styles.module.scss'
import TypeWriter from '../../../controllers/TypeWriter'
import { useEffect } from 'react';

export default function Hero({content}) {

  const typeWriterEl = React.createRef()
  
  useEffect(()=>{

    const typeWriter = new TypeWriter()
    typeWriter.startWriter(typeWriterEl.current)

  }, [])

  return (
    <section className={styles.container} id={"home-hero"}>
      <h1 className={`${styles.title} title`} ref={typeWriterEl}> 
        {content}
      </h1>
    </section>
  )
}
