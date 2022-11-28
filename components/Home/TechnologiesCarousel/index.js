import styles from './styles.module.scss'
import TechnologyCircle from '../TechnologyCircle'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Technologies({content, title}){

  return (
    <section className={styles.container} id={"home-technologies"} >
      <h3 className={`subtitle`}> {title} </h3>
        <div className={styles.carousel}>
          <Swiper 
            slidesPerView={5}
            spaceBetween={32}
          >
            { content.map((item, index) => 
              <SwiperSlide className={styles.item}>
                <TechnologyCircle item={item} key={index} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
    </section> 
  )
}
