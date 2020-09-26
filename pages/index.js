import Head from 'next/head'
import Navbar from '../partials/Shared/Navbar'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'
import Footer from '../partials/Shared/Footer'


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
        <GitHub />
        <Footer />
        
      </main>

    </div>
  )
}
