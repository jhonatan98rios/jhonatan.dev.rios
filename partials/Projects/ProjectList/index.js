import styles from './styles.module.scss'
import ProjectCard from '../../../components/Projects/ProjectCard'

export default function ProjectList() {

  const array = [
    {
      title: 'Fire Day',
      description: 'Um jogo web criado para conscientizar a população sobre os efeitos das queimadas. As tecnologias utilizadas foram: Vue, Vuex, Vue-router, Vue2-touch-events, Sass e Particles.js',
      background: './projects/fireday.png',
      github: 'https://github.com/jhonatan98rios/fireDay'
    },
    {
      title: 'Clothing Store',
      description: 'Um marketplace para lojas de roupa catalogarem seus produtos. As tecnologias utilizadas foram: React, React-router, Sass e Axios',
      background: './projects/clothing_store.png',
      github: 'https://github.com/jhonatan98rios/clothing_store'
    },
  ]

  return (
    <section className={styles.container}>
      <h1> Meus projetos </h1>
      <div className={styles.cardList}>
        {array.map((card, key) => (
          <ProjectCard key={key} card={card} />
        ))}
      </div>
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
