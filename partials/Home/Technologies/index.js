import styles from './styles.module.scss'

const MAX_YEARS = 7

export default function Technologies({ content }) {
  return (
    <section className={styles.container} id="technologies">
      <h2 className={`${styles.title} title`}>Programming Languages and Technologies</h2>
      {content.map((area) => (
        <div className={styles.area} key={area.title}>
          <h3 className="subtitle">{area.title}</h3>
          <div className={styles.grid}>
            {area.techs.map((tech) => (
              <div
                className={tech.detail ? `${styles.row} ${styles.wide}` : styles.row}
                key={tech.name}
              >
                <span className={styles.name}>{tech.name}</span>
                <div className={styles.bar}>
                  <div
                    className={styles.fill}
                    style={{ width: `${(tech.years / MAX_YEARS) * 100}%` }}
                  />
                </div>
                <span className={styles.years}>
                  {tech.years} yr{tech.years > 1 ? 's' : ''}
                </span>
                {tech.detail && <p className={styles.detail}>{tech.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
