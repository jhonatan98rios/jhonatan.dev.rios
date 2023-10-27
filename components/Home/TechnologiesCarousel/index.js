import styles from './styles.module.scss'
import TechnologyCircle from '../TechnologyCircle'
import { Tooltip } from 'react-tooltip';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Technologies({content, title}){

  return (
    <section className={styles.container} id={"home-technologies"} >
      <h3 className={`subtitle`}> {title} </h3>
        <Tooltip id="tool-tip" />
        <div className={styles.carousel}>
          <Swiper 
            slidesPerView={5}
            spaceBetween={24}
            className={styles.swiper}
          >
            { content.map((item, index) => 
              <SwiperSlide className={styles.item} key={index}>
                <TechnologyCircle item={item} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
    </section> 
  )
}
