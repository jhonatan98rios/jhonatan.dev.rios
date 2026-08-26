import { useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './styles.module.scss'

export default function ProjectCard({ card }) {

  const [open, setOpen] = useState(false)

  const images = card.images || []
  const slides = images.length > 1

  return (
    <div className={styles.container} style={{ filter: `drop-shadow(0px 0px 5px ${card.color})` }}>

      <div className={styles.media}>
        {slides ? (
          <Swiper
            modules={[Navigation]}
            navigation
            className={styles.swiper}
          >
            {images.map((img, key) => (
              <SwiperSlide key={key}>
                <img src={img || './projects/default.png'} alt={`${card.title} ${key + 1}`} className={styles.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src={images[0] || './projects/default.png'} alt={card.title} className={styles.image} />
        )}
      </div>

      <div
        className={styles.body}
        style={{ backgroundColor: card.color }}
      >
        <h3 className="subtitle"> {card.title} </h3>

        <button
          type="button"
          className={styles.details}
          onClick={() => setOpen(v => !v)}
        >
          {open ? 'Close' : 'Details'}
        </button>

        {open && (
          <div className={styles.description}>
            <p className="paragraph"> {card.description} </p>

            {
              card.link && (
                <Link href={card.link} legacyBehavior>
                  <a className={`paragraph ${styles.button}`} target="_blank" rel="noopener noreferrer"> View </a>
                </Link>
              )
            }

            {
              card.github && (
                <Link href={card.github} legacyBehavior>
                  <a className="paragraph" target="_blank" rel="noopener noreferrer"> Source Code </a>
                </Link>
              )
            }
          </div>
        )}
      </div>
    </div>
  )
}
