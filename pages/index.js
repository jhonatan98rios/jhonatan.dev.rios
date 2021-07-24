import { home } from '../mockdata/home'
import Layout from '../layout'

import HeadComponent from '../partials/Shared/HeadComponent'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'

function Home({data}) {

  return (
    <>
      <HeadComponent content={data.head} />
      <Layout>
        <Hero content={data.body.hero} />
        <About content={data.body.about} />
        <Technologies content={data.body.technologies} />
        <GitHub content={data.body.github} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: home()
    }
  }
}

export default Home