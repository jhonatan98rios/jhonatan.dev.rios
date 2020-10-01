import Head from 'next/head'
import { home } from './api/home'

import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'

import Layout from '../layout'

function Home({data}) {

  return (
    <div>
      <Head>
        <title> {data.head.title} </title>
        <description> {data.head.description} </description>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero content={data.body.hero} />
        <About content={data.body.about} />
        <Technologies content={data.body.technologies} />
        <GitHub content={data.body.github} />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {

  const data = home()

  return {
    props: {
      data
    }
  }
}

export default Home