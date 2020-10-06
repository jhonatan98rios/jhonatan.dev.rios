import styles from './styles.module.scss'
import TechnologyCircle from '../TechnologyCircle'
import Flickity from 'react-flickity-component'

export default function Technologies({content, title}){

  const flickityOptions = {
    initialIndex: 0,
    draggable: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  }

  return (
    <section className={styles.container} id={"home-technologies"} >
      <h3 className={`subtitle`}> {title} </h3>
        <div className={styles.carousel}>
          <Flickity
            className={'carousel'} 
            elementType={'div'} 
            options={flickityOptions} 
            reloadOnUpdate 
            static
          >
            {
              content.map((item, index) => {
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
