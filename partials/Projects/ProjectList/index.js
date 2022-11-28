import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ProjectCard from '../../../components/Projects/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ProjectList({content}) {

  const [slidesPerView, setSlidesPerView] = useState(3)

  function calculateSlidesPerView() {
    if (window) {
      setSlidesPerView(
        window.innerWidth <= 768 ? 1.5 : (window.innerWidth < 425 ? 1 : 3)
      )
    }
  }

  useEffect(() => {
    calculateSlidesPerView()

    const interval = addEventListener("resize", () => {
      calculateSlidesPerView()
    })

    return clearInterval(interval)
  }, [])

  return (
    <section className={styles.section}>
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

