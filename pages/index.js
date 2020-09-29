import { useEffect } from 'react';
import Head from 'next/head'

import Navbar from '../partials/Shared/Navbar'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'
import Footer from '../partials/Shared/Footer'
import Particles from '../controllers/Particles'
/* import ProjectsBanner from '../partials/Home/ProjectsBanner' */

export default function Home() {

  const particlesEl = React.createRef()

  useEffect(()=>{
    
    const particles = new Particles(particlesEl.current, window.innerHeight, window.innerWidth)
    particles.startParticles()

  }, [])

  return (
    <div>
      <Head>
        <title>Jhonatan Teixeira Rios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="transition">
        <div ref={particlesEl} />
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        {/* <ProjectsBanner /> */}
        <GitHub />
        <Footer />
      </main>
    </div>
  )
}
