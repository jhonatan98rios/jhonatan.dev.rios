import Head from 'next/head'
import Hero from '../partials/Home/Hero'
import Navbar from '../partials/Home/Navbar'
import About from '../partials/Home/About'


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
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
