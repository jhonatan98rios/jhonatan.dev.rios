import Head from 'next/head'
import axios from 'axios'

import Navbar from '../partials/Shared/Navbar'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'
import Footer from '../partials/Shared/Footer'
import { useEffect, useState } from 'react'

function Home({data}) {

  return (
    <div>
      <Head>
        <title>Jhonatan Teixeira Rios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="transition">
        <Navbar />
        <Hero />
        <About />
        {
          data && <Technologies content={data.body.technologies} />
        }
        <GitHub />
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticProps() {

  const port = process.env.PORT || 3000

  const res = await axios.get(`http://localhost:${port}/api/home`)
  const data = await res.data.page

  return {
    props: {
      data: data
    }
  }
}

export default Home