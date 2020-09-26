import Head from 'next/head'
import Navbar from '../../partials/Shared/Navbar'
import ProjectList from '../../partials/Projects/ProjectList'
import GitHub from '../../partials/Shared/GitHub'
import Footer from '../../partials/Shared/Footer'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Jhonatan Teixeira Rios | Projetos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <ProjectList />
        <GitHub />
        <Footer />       
      </main>

    </div>
  )
}
