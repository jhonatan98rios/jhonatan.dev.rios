import HeadComponent from '../partials/Shared/HeadComponent'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Technologies from '../partials/Home/Technologies'
import GitHub from '../partials/Shared/GitHub'
import ProjectList from '../partials/Home/ProjectList'

const content = {
  head: {
    title: 'Jhonatan Teixeira Rios',
    description: 'Seja bem vindo ao meu portfólio de desenvolvimento web'
  },
  body: {
    hero: '"The ones who are crazy enough to think they can change the world are the ones who do" (Steve Jobs)',
    about: "My name is Jhonatan Teixeira Rios and I have been working with technology since 2016. I have a technical degree in visual communication and worked as a Graphic Designer and Motion Designer for 3 years. After that, I made a career transition to Software Development, when I started working as a Frontend Engineer at the company Cielo, working directly on the Landing Page, that was firstly made in Handlebars, JQuery and Bootstrap, and after some months we rewrite using Vue, Nuxt, Scss and Bulma. I currently work as a Data Engineer at PagSeguro, creating internal data solutions for ETL (extraction, transformation and loading), Data Pipelines and data analysis, using technologies such as Typescript, Python, SQL, Kafka, RabbitMQ, Docker, Kubernetes and AWS. I also have some personal projects such as my blog, applications and games for Android and Artificial Intelligence projects. Additionally, I have been specializing in cloud development with AWS and recently acquired an AWS Cloud Practitioner certification.",
    technologies: {
      languages: [
        {
          title: 'HTML',
          url: './technologies/languages/html5.png'
        },
        {
          title: 'CSS',
          url: './technologies/languages/css3.png'
        },
        {
          title: 'Javascript',
          url: './technologies/languages/js.png'
        },
        {
          title: 'Typescript',
          url: './technologies/languages/typescript.png'
        },
        {
          title: 'Python',
          url: './technologies/languages/python.png'
        },
        {
          title: 'Java',
          url: './technologies/languages/java.png'
        },
        {
          title: 'Kotlin',
          url: './technologies/languages/kotlin.png'
        },
      ],
      frontend: [
        {
          title: 'React',
          url: './technologies/frontend/react.png'
        },
        {
          title: 'Next.js',
          url: './technologies/frontend/next.png'
        },
        {
          title: 'Vue',
          url: './technologies/frontend/vue.png'
        },
        {
          title: 'Nuxt.js',
          url: './technologies/frontend/nuxt.png'
        },
        {
          title: 'Redux',
          url: './technologies/frontend/redux.png'
        },
        {
          title: 'React Native',
          url: './technologies/frontend/rn.png'
        },
      
        {
          title: 'Jetpack Compose',
          url: './technologies/frontend/jetpack.png'
        },
        {
          title: 'Sass',
          url: './technologies/frontend/sass.png'
        },
        {
          title: 'Styled-Components',
          url: './technologies/frontend/styled.png'
        }
      ],
      backend: [
        {
          title: 'Node',
          url: './technologies/backend/node.png'
        },
        {
          title: 'Express',
          url: './technologies/backend/express.png'
        },
        {
          title: 'Socketio',
          url: './technologies/backend/socketio.png'
        },
        {
          title: 'Nest js',
          url: './technologies/backend/nest.png'
        },
        {
          title: 'Serverless',
          url: './technologies/devops/serverless.png'
        },
        {
          title: 'Flask',
          url: './technologies/backend/flask.png'
        },
        {
          title: 'Spring',
          url: './technologies/backend/spring.png'
        },
        {
          title: 'GraphQL',
          url: './technologies/backend/graphql.png'
        },
        {
          title: 'MongoDB',
          url: './technologies/backend/mongo.png'
        },
        {
          title: 'PostgreSQL',
          url: './technologies/backend/postgresql.png'
        },
        {
          title: 'MySQL',
          url: './technologies/backend/mysql.png'
        },
      ],
      infra: [
        {
          title: 'AWS',
          url: './technologies/devops/aws.png'
        },
        {
          title: 'Docker',
          url: './technologies/devops/docker.png'
        },
        {
          title: 'Kubernetes',
          url: './technologies/devops/kubernetes.png'
        },
        {
          title: 'Kafka',
          url: './technologies/devops/kafka.png'
        },
        {
          title: 'RabbitMQ',
          url: './technologies/devops/rabbitmq.png'
        },
        {
          title: 'Terraform',
          url: './technologies/devops/terraform.png'
        },
        {
          title: 'Cloudformation',
          url: './technologies/devops/cloudformation.png'
        },
        {
          title: 'Ansible',
          url: './technologies/devops/ansible.png'
        },
        {
          title: 'Jenkins',
          url: './technologies/devops/jenkins.png'
        },
      ],
      others: [
        {
          title: 'Git',
          url: './technologies/others/git.png'
        },
        {
          title: 'Webpack',
          url: './technologies/others/webpack.png'
        },
        {
          title: 'Gulp',
          url: './technologies/others/gulp.png'
        },
        {
          title: 'Jest',
          url: './technologies/others/jest.png'
        },
        {
          title: 'Pytest',
          url: './technologies/others/pytest.png'
        },
        {
          title: 'Figma',
          url: './technologies/others/figma.png'
        },
        {
          title: 'Adobe Creative Suite',
          url: './technologies/others/adobe.png'
        },
      ]
    },
    projects: {
      title: 'Check out my main projects',
      projectList: [
        {
          title: 'Blog',
          description: 'My personal blog is a set of content that I considered important during my studies, so I decided to organize my knowledge into articles about careers, programming, AWS and architecture. This blog was created with Next.js, Scss, Node, Typescript, MongoDB, Vercel and AWS.',
          background: './projects/blog.png',
          link: 'https://www.jhonatan-dev-rios-blog.com.br/',
          github: 'https://github.com/jhonatan98rios/blog-pessoal',
          color: 'rgba(14,179,156, .9)'
        },
        {
          title: 'Metal Against Demons',
          description: "This is project is a 2D top down game, made with Java and Kotlin. It's inspired by Vampire Survivors, but the objective is to defeat monsters using music.",
          background: './projects/mad.png',
          link: 'https://play.google.com/store/apps/details?id=com.teixeirarios.mad',
          github: 'https://github.com/jhonatan98rios/metal-against-demons-android',
          color: 'rgba(91,26,184, .9)'
        },
        {
          title: 'Guia de Hardware Web',
          description: "This app uses artificial intelligence and natural language processing to recommend notebook models, based on the user's needs. The technologies used were: Next 14, Tailwind, Typescript, Serverless Framework and Natural.js",
          background: './projects/hardware-guide.png',
          link: 'https://hardware-guide-web.vercel.app',
          github: 'https://github.com/jhonatan98rios/hardware-guide-web',
          color: 'rgba(14,179,156, .9)'
        },
        {
          title: 'Classifiers',
          description: 'This project was created while my studies about microservices and AWS. This project consists in 3 microservices that works receiving a csv file with the train data, realizing the train of classification model and providing a endpoint to consume the trained model as a Rest API. For this project I decided to use Bun.js as a runtime with Typescript, AWS S3, AWS SQS and I intend to deploy with Kuberntes on AWS too.',
          background: './projects/classifiers.png',
          github: 'https://github.com/jhonatan98rios/nodejs-naive-bayes-worker',
          color: 'rgba(91,26,184, .9)'
        },
        {
          title: 'Next Ecommerce',
          description: "This project was created with the aim of serving as a front-end for an ecommerce based on microservices, but it's not finished yet.",
          background: './projects/ecommerce.png',
          link: 'https://jhonatan-dev-rios-store.vercel.app/',
          github: 'https://github.com/jhonatan98rios/nextjs-commerce',
          color: 'rgba(14,179,156, .9)'
        },
        
        // {
        //   title: 'Swordio',
        //   description: 'Swordio is a Turn-based online RPG, PVP combat that runs directly in the browser. Just create an account, log in and create a room. Then just share the room with your friends and start playing. The technologies used were: Vue, Sass, Node, Socket.io, PostgreSQL',
        //   background: './projects/swordio.png',
        //   github: 'https://github.com/jhonatan98rios/swordio',
        //   color: 'rgba(14,179,156, .9)'
        // },
        // {
        //   title: 'Dead Nation',
        //   description: 'Dead Nation is a 2D top-down zombie shooter, with different difficulty levels and a store with weapons and equipment to improve your character. The technologies used were: Ionic, React, Typescript and Sass',
        //   background: './projects/dead-nation.png',
        //   link: 'https://play.google.com/store/apps/details?id=com.rios.deadnation',
        //   github: 'https://github.com/jhonatan98rios/DeadNationApp',
        //   color: 'rgba(91,26,184, .9)'
        // },
        // {
        //   title: 'Guia de hardware (Deprecated)',
        //   description: "This app uses artificial intelligence and natural language processing to recommend notebook models, based on the user's needs. The technologies used were: React-Native, Redux, Redux-saga, Styled-components, Node, Express, Natural.js, Jest and MongoDB",
        //   background: './projects/hardware-guide.png',
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
      <Hero content={content.body.hero} />
      <About content={content.body.about} />
      <Technologies content={content.body.technologies} />
      <ProjectList content={content.body.projects} />
      <GitHub content={content.body.github} />
    </>
  )
}

export default Home

