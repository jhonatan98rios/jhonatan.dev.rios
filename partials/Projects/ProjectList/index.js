import styles from './styles.module.scss'
import ProjectCard from '../../../components/Projects/ProjectCard'
import Flickity from 'react-flickity-component'

export default function ProjectList() {

  const flickityOptions = {
    initialIndex: 2,
    draggable: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  }

  const array = [
    {
      title: 'Whatsapp Clone Vanilla',
      description: 'Um clone do Whatsapp Web. Tecnologias utilizadas: HTML, CSS, Javascript MVC, Webpack, Firebase-storage, Firebase-firestore e Firebase-functions',
      background: './projects/whatsapp-clone-vanilla.png',
      github: 'https://github.com/jhonatan98rios/clothing_store',
      color: 'rgba(14,179,156, .9)'
    },
    {
      title: 'Fire Day',
      description: 'Um jogo web criado para conscientizar a população sobre os efeitos das queimadas. As tecnologias utilizadas foram: Vue, Vuex, Vue-router, Vue2-touch-events, Sass e Particles.js',
      background: './projects/fireday.png',
      github: 'https://github.com/jhonatan98rios/fireDay',
      color: 'rgba(91,26,184, .9)'
    },
    {
      title: 'Clothing Store',
      description: 'Um marketplace para lojas de roupa catalogarem seus produtos. As tecnologias utilizadas foram: React, React-router, Sass e Axios',
      background: './projects/clothing_store.png',
      github: 'https://github.com/jhonatan98rios/clothing_store',
      color: 'rgba(14,179,156, .9)'
    },
    {
      title: 'Sistema Interno',
      description: 'Um sistema de linha de comando para gerenciamento de clientes, funcionários, vendas e estoque. A tecnologia utilizada nesse projeto foi a linguagem C',
      github: 'https://github.com/jhonatan98rios/clothing_store',
      color: 'rgba(91,26,184, .9)'
    },
  ]

  return (
    <section className={styles.container}>
      <h1> Meus projetos </h1>
      <Flickity
        className={styles.cardList} 
        elementType={'div'} 
        options={flickityOptions} 
        reloadOnUpdate 
        static
      >
        {array.map((card, key) => (
          <ProjectCard key={key} card={card} />
        ))}
      </Flickity>
    </section>
  )
}


/* 

FireDay

"core-js": "^3.4.4",
"particles.js": "^2.0.0",
"register-service-worker": "^1.6.2",
"vue": "^2.6.10",
"vue-flickity": "^1.2.1",
"vue-router": "^3.1.3",
"vue2-touch-events": "^2.1.0",
"vuex": "^3.1.2"

*/
