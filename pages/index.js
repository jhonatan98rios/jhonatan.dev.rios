import Head from 'next/head'
import Hero from '../partials/Home/Hero'
import Navbar from '../partials/Home/Navbar'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jhonatan Teixeira Rios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navbar />
        <Hero />
        <About />
        <Technologies />
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
