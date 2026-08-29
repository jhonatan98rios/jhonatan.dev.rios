import HeadComponent from '../partials/Shared/HeadComponent'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'
import ProjectList from '../partials/Home/ProjectList'

const content = {
  head: {
    title: 'Jhonatan Teixeira Rios',
    description: 'Software developer portfolio of Jhonatan Teixeira Rios. Cloud, data engineering and full-stack projects.',
    path: '/',
    person: true
  },
  body: {
    about: "My name is Jhonatan Teixeira Rios and I'm a Data Engineer with 7 years of experience in the technology industry. I started my career as a Frontend Engineer at Cielo in 2019, and in 2021 I moved to data engineering at PagBank, where I worked with Google Analytics data, building ETL pipelines and data analysis using BigQuery, Python, Kubernetes, Kafka, AWS and Redshift. Since 2024 I've been working as a Data Engineer at Kbra, working with Python, Kubernetes, PostgreSQL, Snowflake, SQL Server, Dash (UI) and AWS. I also have personal projects such as my blog, Android applications and games, and Artificial Intelligence projects. Additionally, I have been specializing in cloud development with AWS and recently acquired an AWS Cloud Practitioner certification.",
    technologies: [
      {
        title: "Languages & Frameworks",
        techs: [
          { name: "JavaScript", years: 7 },
          { name: "Python", years: 7 },
          { name: "React", years: 7 },
          { name: "Next.js", years: 7 },
          { name: "SQL", years: 5 },
          { name: "TypeScript", years: 5 },
          { name: "Vue", years: 2 },
          { name: "Nuxt", years: 2 },
          { name: "React Native", years: 2 },
          { name: "Kotlin / Jetpack Compose", years: 2 },
        ]
      },
      {
        title: "Data & Analytics",
        techs: [
          { name: "PostgreSQL", years: 5 },
          { name: "MongoDB", years: 5 },
          { name: "BigQuery", years: 3 },
          { name: "Redshift", years: 3 },
          { name: "Snowflake", years: 2 },
          { name: "SQL Server", years: 2 },
        ]
      },
      {
        title: "Cloud & Infrastructure",
        techs: [
          { name: "AWS", years: 5 },
          { name: "Docker", years: 5 },
          { name: "Kubernetes", years: 5 },
          { name: "Kafka", years: 3 },
        ]
      },
      {
        title: "AI",
        techs: [
          { name: "AI Harness", years: 1, detail: "Agents, LangChain, LangGraph, RAG, vectors, knowledge graphs, AI tools, chatbots, open-weight models and fine-tuning with Unsloth." },
        ]
      },
    ],
    career: {
      title: 'My experience in the technology industry',
      jobList: [
        {
          title: 'KBRA',
          description: "I work as a Data Engineer at Kbra, where I develop and maintain data Data pipelines and  Big Data applications using Python, Kubernetes, PostgreSQL, Snowflake, SQL Server, Dash (UI) and AWS.",
        },

        {
          title: 'PagBank',
          description: 'I worked as a Data Engineer at PagBank, where I develop and maintain ETL and Big Data applications using Python, Kubernetes, Kafka, BigQuery, Redshift, AWS and GCP',
        },
        {
          title: 'Cielo',
          description: "I worked as a Frontend Engineer at Cielo, where I migrate the legacy Landing Page, from old technologies and maintained it using Vue.js, Nuxt.js, SCSS and Node.js, reaching high quality, good performance, best SEO practices and accessibility.",
        }
      ],
    },
    projects: {
      title: 'Check out my main projects',
      projectList: [
        {
          title: 'Acelerai',
          description: "SaaS career accelerator with roadmap generation, insights, market statistics and generation of resumes optimized for the position.",
          images: ['/projects/acelerai.png'],
          color: 'rgba(91,26,184, .9)'
        },

        {
          title: 'Blog',
          description: 'My personal blog is a collection of content I found important during my studies, articles about careers, programming, AWS and software architecture. Built with Next.js, SCSS, Node, TypeScript, MongoDB, Vercel and AWS.',
          images: ['/projects/blog.png'],
          link: 'https://www.jhonatan-dev-rios-blog.com.br/',
          github: 'https://github.com/jhonatan98rios/blog-pessoal',
          color: 'rgba(14,179,156, .9)'
        },
        {
          title: 'Metal Against Demons',
          description: "This project is a 2.5D top-down game, made with Typescript, Threejs and BitECS (High performance ECS/SOA optimized TS framework). It's inspired by Vampire Survivors, but the objective is to defeat monsters using music.",
          images: ['/projects/mad-1.png', '/projects/mad-2.png'],
          link: 'https://metal-against-demons-bitecs-threejs.vercel.app/',
          github: 'https://github.com/jhonatan98rios/metal-against-demons-bitecs-threejs-harness',
          color: 'rgba(91,26,184, .9)'
        },
        {
          title: 'Hardware Guide',
          description: "This app uses artificial intelligence and natural language processing to recommend notebook models, based on the user's needs. The technologies used were: Next 14, Tailwind, TypeScript, Serverless Framework and Natural.js",
          images: ['/projects/hardware-guide.png'],
          link: 'https://hardware-guide-web.vercel.app',
          github: 'https://github.com/jhonatan98rios/hardware-guide-web',
          color: 'rgba(14,179,156, .9)'
        },
        {
          title: 'Classifiers',
          description: 'This project was created during my studies on microservices and AWS. It consists of 3 microservices that receive a CSV file with training data, train a classification model, and provide an endpoint to consume the trained model as a REST API. For this project I decided to use Bun.js as a runtime with TypeScript, AWS S3, AWS SQS, and I intend to deploy it with Kubernetes on AWS as well.',
          images: ['/projects/classifiers.png'],
          github: 'https://github.com/jhonatan98rios/nodejs-naive-bayes-worker',
          color: 'rgba(91,26,184, .9)'
        },
        
        // {
        //   title: 'Swordio',
        //   description: 'Swordio is a Turn-based online RPG, PVP combat that runs directly in the browser. Just create an account, log in and create a room. Then just share the room with your friends and start playing. The technologies used were: Vue, Sass, Node, Socket.io, PostgreSQL',
        //   images: ['./projects/swordio.png'],
        //   github: 'https://github.com/jhonatan98rios/swordio',
        //   color: 'rgba(14,179,156, .9)'
        // },
        // {
        //   title: 'Dead Nation',
        //   description: 'Dead Nation is a 2D top-down zombie shooter, with different difficulty levels and a store with weapons and equipment to improve your character. The technologies used were: Ionic, React, Typescript and Sass',
        //   images: ['./projects/dead-nation.png'],
        //   link: 'https://play.google.com/store/apps/details?id=com.rios.deadnation',
        //   github: 'https://github.com/jhonatan98rios/DeadNationApp',
        //   color: 'rgba(91,26,184, .9)'
        // },
        // {
        //   title: 'Guia de hardware (Deprecated)',
        //   description: "This app uses artificial intelligence and natural language processing to recommend notebook models, based on the user's needs. The technologies used were: React-Native, Redux, Redux-saga, Styled-components, Node, Express, Natural.js, Jest and MongoDB",
        //   images: ['./projects/hardware-guide.png'],
        //   link: 'https://play.google.com/store/apps/details?id=com.hardwareguide',
        //   github: 'https://github.com/jhonatan98rios/HardwareGuide',
        //   color: 'rgba(14,179,156, .9)'
        // },
      ],
    },
    github: 'Sharing knowledge and experience helps us go further. Access the code of my main projects here.',
  }
}

function Home() {

  return (
    <>
      <HeadComponent content={content.head} />
      <Hero/>
      <About content={content.body.about} />
      <Technologies content={content.body.technologies} />
      <ProjectList content={content.body.projects} />
      <GitHub content={content.body.github} />
    </>
  )
}

export default Home

