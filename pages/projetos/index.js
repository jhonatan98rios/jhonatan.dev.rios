import Head from 'next/head'
import { projects } from '../api/projects'

import ProjectList from '../../partials/Projects/ProjectList'
import GitHub from '../../partials/Shared/GitHub'

import Layout from '../../layout'

function Projects({data}) {

  return (
    <div>
      <Head>
        <title> {data.head.title} </title>
        <description> {data.head.description} </description>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ProjectList content={data.body.projects} />
        <GitHub content={data.body.github} />
      </Layout>

    </div>
  )
}

export async function getStaticProps() {

  const data = projects()

  return {
    props: {
      data
    }
  }
}

export default Projects