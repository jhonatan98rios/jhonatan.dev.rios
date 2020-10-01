import { projects } from '../api/projects'
import Layout from '../../layout'

import HeadComponent from '../../partials/Shared/HeadComponent'
import ProjectList from '../../partials/Projects/ProjectList'
import GitHub from '../../partials/Shared/GitHub'

function Projects({data}) {

  return (
    <>
      <HeadComponent content={data.head} />
      <Layout>
        <ProjectList content={data.body.projects} />
        <GitHub content={data.body.github} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: projects()
    }
  }
}

export default Projects