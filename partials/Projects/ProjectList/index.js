import styles from './styles.module.scss'
import ProjectCard from '../../../components/Projects/ProjectCard'
import Flickity from 'react-flickity-component'

export default function ProjectList({content}) {

  const flickityOptions = {
    initialIndex: 0,
    draggable: true,
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    cellAlign: 'center'
  }

  return (
    <section className={styles.container}>
      <h1 className="title"> {content.title} </h1>
      <Flickity
        className={styles.cardList} 
        elementType={'div'} 
        options={flickityOptions} 
        reloadOnUpdate 
        static
      >
        {content.projectList.map((card, key) => (
          <ProjectCard key={key} card={card} />
        ))}
      </Flickity>
    </section>
  )
}

