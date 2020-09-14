import styles from './styles.module.scss'
import Particles from '../../../controllers/Particles'
import TypeWriter from '../../../controllers/TypeWriter'
import { useEffect } from 'react';

export default function Hero() {

  const particlesEl = React.createRef()
  const typeWriterEl = React.createRef()
  
  useEffect(()=>{
    
    const particles = new Particles(particlesEl.current, window.innerHeight, window.innerWidth)
    particles.startParticles()

    const typeWriter = new TypeWriter()
    typeWriter.startWriter(typeWriterEl.current)

  }, [])

  return (
    <div className={styles.container} ref={particlesEl}>
      <h1 className={styles.title} ref={typeWriterEl}> 
        As pessoas que são loucas o suficiente para achar que podem mudar o mundo são aquelas que o mudam
      </h1>
    </div>
  )
}