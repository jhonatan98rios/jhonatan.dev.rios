import { useEffect } from 'react';
import Particles from '../controllers/Particles'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  const particlesEl = React.createRef()

  useEffect(()=>{
    
    const particles = new Particles(particlesEl.current, window.innerHeight, window.innerWidth)
    particles.startParticles()

  }, [])
  
  return (
    <>
      <div ref={particlesEl} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp