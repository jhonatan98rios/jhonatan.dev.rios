import styles from './styles.module.scss'
import Particles from '../../../controllers/Particles'
import { useEffect } from 'react';

export default function Hero() {

  const particlesEl = React.createRef();
  
  useEffect(()=>{
    
    const particles = new Particles(particlesEl.current, window.innerHeight, window.innerWidth)
    particles.startParticles()

  }, [])

  return (
    <div className={styles.container} ref={particlesEl}>
      
    </div>
  )
}
