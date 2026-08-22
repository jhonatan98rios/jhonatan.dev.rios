import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ProjectCard from '../../../components/Projects/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ProjectList({content}) {

  const [slidesPerView, setSlidesPerView] = useState(3)

  function calculateSlidesPerView() {
    setSlidesPerView(window.innerWidth < 768 ? 1.5 : 3)
  }

  useEffect(() => {
    calculateSlidesPerView()
    window.addEventListener('resize', calculateSlidesPerView)
    return () => window.removeEventListener('resize', calculateSlidesPerView)
  }, [])

  return (
    <section className={styles.section} id='projects'>
      <div className={styles.container}>
        <h1 className="title"> {content.title} </h1>
        <Swiper 
          slidesPerView={slidesPerView}
          
          className={styles.swiper}
        >
          {content.projectList.map((card, key) => (
            <SwiperSlide className={styles.card} key={key}>
              <ProjectCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

