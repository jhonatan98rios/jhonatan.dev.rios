import styles from './styles.module.scss'
import TechnologyCircle from '../../../components/Home/TechnologyCircle'
import Flickity from 'react-flickity-component'

const Technologies = ({text}) => {

  const itens = ['HTML','CSS', 'JS', 'React', 'React Native', 'Next.js', 'Vue', 'Nuxt.js', 'Node', 'Git', 'Sass', 'Figma', 'Adobe Creative Suite', 'MongoDB', 'MySQL', 'Python', 'Flask']
  const flickityOptions = {
    initialIndex: 0,
    draggable: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  }

  return (
    <section className={styles.container} id={"home-technologies"} >
      <h2 className={`${styles.title} title`}> Linguagens e Tecnologias {text} </h2>
        <div className={styles.carousel}>
          <Flickity
            className={'carousel'} 
            elementType={'div'} 
            options={flickityOptions} 
            reloadOnUpdate 
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
    </section> 
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
