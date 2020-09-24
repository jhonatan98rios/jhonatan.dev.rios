import Head from 'next/head'
import Navbar from '../../partials/Shared/Navbar'
import Universe from '../../partials/Home/Universe'
import Footer from '../../partials/Shared/Footer'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Jhonatan Teixeira Rios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Universe />
        <Footer />       
      </main>

    </div>
  )
}
