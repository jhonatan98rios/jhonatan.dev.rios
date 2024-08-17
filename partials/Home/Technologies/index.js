import styles from './styles.module.scss'
import TechnologiesCarousel from '../../../components/Home/TechnologiesCarousel'

export default function Technologies({content}){

  return (
    <section className={styles.container} id={"technologies"} >
      <h2 className={`${styles.title} title`}> Programming Languages and Technologies </h2>
      <TechnologiesCarousel content={content.languages} title={"Languages"} />
      <TechnologiesCarousel content={content.frontend} title={"Front-End"} />
      <TechnologiesCarousel content={content.backend} title={"Back-End"} />
      <TechnologiesCarousel content={content.infra} title={"Infrastructure"} />
      <TechnologiesCarousel content={content.others} title={"Another tools"} />
    </section> 
  )
}
