import styles from './styles.module.scss'
import TechnologyCircle from '../../../components/Home/TechnologyCircle'
import Flickity from 'react-flickity-component'

const Technologies = ({text}) => {

  const itens = ['HTML','CSS', 'JS', 'React', 'React Native', 'Next.js', 'Vue', 'Nuxt.js', 'Node', 'Git', 'Sass', 'Figma', 'Adobe Creative Suite', 'MongoDB', 'MySQL', 'Python', 'Flask']
  const flickityOptions = {
    initialIndex: 2,
    draggable: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Linguagens e Tecnologias {text} </h2>
      <div className={styles.carousel}>
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          reloadOnUpdate // default false
          static
        >
          {
            itens.map((item, index) => {
              return(
                <TechnologyCircle item={item} key={index} />
              )
            })
          }
        </Flickity>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {

  return {
    props: {
      text: 'Hello World'
    },
  }
}

export default Technologies
