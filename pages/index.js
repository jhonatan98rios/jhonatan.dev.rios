import HeadComponent from '../partials/Shared/HeadComponent'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Career from '../partials/Home/Career'
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
    about: "My name is Jhonatan Teixeira Rios and I'm a Data Engineer with 7 years of experience in the technology industry, working mostly with data pipelines, analytics and cloud infrastructure. I also have personal projects such as my blog, Android applications and games, and Artificial Intelligence projects. Additionally, I have been specializing in cloud development with AWS and recently acquired an AWS Cloud Practitioner certification.",
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
      title: 'Professional trajectory',
      jobList: [
        {
          title: 'KBRA',
          role: 'Data Engineer',
          period: '2024 — Present',
          description: 'Building data pipelines, analytics dashboards and cloud infrastructure with Python, Kubernetes, PostgreSQL, Snowflake, SQL Server, Dash (UI) and AWS.',
        },
        {
          title: 'PagBank',
          role: 'Data Engineer',
          period: '2021 — 2024',
          description: 'Built ETL pipelines and data analysis on Google Analytics data using BigQuery, Python, Kubernetes, Kafka, AWS and Redshift.',
        },
        {
          title: 'Cielo',
          role: 'Frontend Engineer',
          period: '2019 — 2021',
          description: 'Started my career as a Frontend Engineer, building and maintaining web applications and features.',
        }
      ],
    },
    projects: {
      title: 'Check out my main projects',
      projectList: [
        {
          title: 'Acelerai',
          description: "SaaS career accelerator with roadmap generation, insights, market statistics and generation of resumes optimized for the position.",
          objective: "Accelerate career transitions with AI-generated roadmaps, market insights and resumes optimized for the target position.",
          stack: ['Next.js', 'TypeScript', 'Node.js', 'OpenAI'],
          architecture: 'SaaS: frontend generates personalized roadmaps and resumes from the user profile and market data.',
          infra: 'Vercel + serverless functions.',
          images: ['/projects/acelerai.png'],
          color: 'rgba(91,26,184, .9)'
        },

        {
          title: 'Blog',
          description: 'My personal blog is a collection of content I found important during my studies, articles about careers, programming, AWS and software architecture. Built with Next.js, SCSS, Node, TypeScript, MongoDB, Vercel and AWS.',
          objective: 'Share knowledge about careers, programming, AWS and software architecture.',
          stack: ['Next.js', 'SCSS', 'Node', 'TypeScript', 'MongoDB'],
          architecture: 'Static site generated with Next.js, content served from MongoDB.',
          infra: 'Vercel + AWS.',
          images: ['/projects/blog.png'],
          link: 'https://www.jhonatan-dev-rios-blog.com.br/',
          github: 'https://github.com/jhonatan98rios/blog-pessoal',
          color: 'rgba(14,179,156, .9)'
        },
        {
          title: 'Metal Against Demons',
          description: "This project is a 2.5D top-down game, made with Typescript, Threejs and BitECS (High performance ECS/SOA optimized TS framework). It's inspired by Vampire Survivors, but the objective is to defeat monsters using music.",
          objective: 'Defeat monsters using music in a Vampire Survivors-inspired 2.5D top-down game.',
          stack: ['TypeScript', 'Three.js', 'BitECS'],
          architecture: '2.5D top-down game built on an ECS (Entity-Component-System) with the SOA-optimized BitECS framework.',
          infra: 'Vercel.',
          images: ['/projects/mad-1.png', '/projects/mad-2.png'],
          link: 'https://metal-against-demons-bitecs-threejs.vercel.app/',
          github: 'https://github.com/jhonatan98rios/metal-against-demons-bitecs-threejs-harness',
          color: 'rgba(91,26,184, .9)'
        },
        {
          title: 'Hardware Guide',
          description: "This app uses artificial intelligence and natural language processing to recommend notebook models, based on the user's needs. The technologies used were: Next 14, Tailwind, TypeScript, Serverless Framework and Natural.js",
          objective: "Recommend notebook models based on the user's needs using AI and natural language processing.",
          stack: ['Next 14', 'Tailwind', 'TypeScript', 'Serverless Framework', 'Natural.js'],
          architecture: 'Web app that parses user needs with Natural.js and scores notebook models.',
          infra: 'Vercel + Serverless Framework.',
          images: ['/projects/hardware-guide.png'],
          link: 'https://hardware-guide-web.vercel.app',
          github: 'https://github.com/jhonatan98rios/hardware-guide-web',
          color: 'rgba(14,179,156, .9)'
        },
        {
          title: 'Classifiers',
          description: 'This project was created during my studies on microservices and AWS. It consists of 3 microservices that receive a CSV file with training data, train a classification model, and provide an endpoint to consume the trained model as a REST API. For this project I decided to use Bun.js as a runtime with TypeScript, AWS S3, AWS SQS, and I intend to deploy it with Kubernetes on AWS as well.',
          objective: 'Study microservices and AWS by building a model-training pipeline exposed as a REST API.',
          stack: ['Bun.js', 'TypeScript', 'AWS S3', 'AWS SQS', 'Kubernetes'],
          architecture: '3 microservices: receive a CSV with training data, train a classification model, and expose it as a REST API.',
          infra: 'AWS S3 + SQS; Kubernetes on AWS.',
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
      <Career content={content.body.career} />
      <Technologies content={content.body.technologies} />
      <ProjectList content={content.body.projects} />
      <GitHub content={content.body.github} />
    </>
  )
}

export default Home

