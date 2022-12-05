import styles from './styles.module.scss'
import TypeWriter from '../../../lib/TypeWriter'
//import Particles from '../../../lib/Particles'
import Globe from '../../../components/Home/Globe'
import { useEffect, createRef } from 'react';

export default function Hero({content}) {

  const particlesEl = createRef()
  const typeWriterEl = createRef()
  
  
  useEffect(()=>{

    /* const particles = new Particles(particlesEl.current, window.innerHeight, window.innerWidth)
    particles.startParticles() */

    const typeWriter = new TypeWriter()
    typeWriter.startWriter(typeWriterEl.current)

  }, [])


  return (
    <section className={styles.container} id={"inicio"} ref={particlesEl}>
      <Globe />
      <h1 className={`${styles.title} title`} ref={typeWriterEl}> 
        {content}
      </h1>
    </section>
  )
}